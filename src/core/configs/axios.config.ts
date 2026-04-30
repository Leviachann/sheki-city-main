import axios from 'axios';
import store from 'store/store.config';
import { setLoader } from 'store/store.reducer';
import { errorToast, successToast } from 'core/shared/toast/toast';
import { getToken } from 'core/helpers/get-token';

const axiosInstance = axios.create({
    baseURL: import.meta.env.VITE_APP_API_MAIN,
});
axiosInstance.interceptors.request.use((config) => {
    store.dispatch(setLoader(true));

    const token = getToken();
    if (token) {
        config.headers.Authorization = `Bearer ${token}`;
    }

    const { locale } = store.getState();
    const currentLang = Object.keys(locale).length ? 'az' : 'az'; 
    config.headers['Accept-Language'] = currentLang;

    return config;
});

axiosInstance.interceptors.response.use(
    (response) => {
        store.dispatch(setLoader(false));

        if (['post', 'put', 'patch', 'delete'].includes(response.config.method ?? '')) {
            successToast('Əməliyyat uğurla tamamlandı');
        }

        return response;
    },
    (error) => {
        store.dispatch(setLoader(false));

        const status = error.response?.status;

        if (status === 401) {
            errorToast('Sessiya müddəti bitib, yenidən daxil olun');
            localStorage.removeItem(import.meta.env.VITE_APP_TITLE);
            window.location.href = '/';
        } else if (status === 403) {
            errorToast('Bu əməliyyat üçün icazəniz yoxdur');
        } else if (status === 404) {
            errorToast('Məlumat tapılmadı');
        } else if (status === 422) {
            errorToast('Daxil edilən məlumatlar düzgün deyil');
        } else if (status === 500) {
            errorToast('Server xətası baş verdi');
        } else {
            errorToast('Xəta baş verdi, yenidən cəhd edin');
        }

        return Promise.reject(error);
    },
);

export default axiosInstance;