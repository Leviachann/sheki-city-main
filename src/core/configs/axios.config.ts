import axios from 'axios';
import store from 'store/store.config';
import { setLoader } from 'store/store.reducer';
import { errorToast, successToast } from 'core/shared/toast/toast';
import { getToken } from 'core/helpers/get-token';

const API_BASE_URL = import.meta.env.VITE_APP_API_MAIN;

const axiosInstance = axios.create({
    baseURL: `${API_BASE_URL}/api/v1`,
    withCredentials: true, 
});

let isRefreshing = false;
let failedQueue: any[] = [];

const processQueue = (error: any, token: string | null = null) => {
    failedQueue.forEach((prom) => {
        if (error) {
            prom.reject(error);
        } else {
            prom.resolve(token);
        }
    });
    failedQueue = [];
};

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
    async (error) => {
        store.dispatch(setLoader(false));
        const originalRequest = error.config;
        const status = error.response?.status;

        if (status === 401 && !originalRequest._retry) {
            if (isRefreshing) {
                return new Promise((resolve, reject) => {
                    failedQueue.push({ resolve, reject });
                })
                .then((token) => {
                    originalRequest.headers.Authorization = `Bearer ${token}`;
                    return axiosInstance(originalRequest);
                })
                .catch((err) => Promise.reject(err));
            }

            originalRequest._retry = true;
            isRefreshing = true;

            try {
                const refreshResponse = await axios.post(
                    `${API_BASE_URL}/api/v1/user/refresh`, 
                    {}, 
                    { withCredentials: true }
                );
                const { accessToken } = refreshResponse.data;

                localStorage.setItem('accessToken', accessToken); 

                axiosInstance.defaults.headers.common['Authorization'] = `Bearer ${accessToken}`;
                originalRequest.headers['Authorization'] = `Bearer ${accessToken}`;

                processQueue(null, accessToken);
                isRefreshing = false;

                return axiosInstance(originalRequest);
            } catch (refreshError) {
                processQueue(refreshError, null);
                isRefreshing = false;

                errorToast('Sessiya müddəti bitib, yenidən daxil olun');
                localStorage.removeItem(import.meta.env.VITE_APP_TITLE);
                localStorage.removeItem('accessToken'); 
                window.location.href = '/';
                return Promise.reject(refreshError);
            }
        }

        if (status === 403) {
            errorToast('Bu əməliyyat üçün icazəniz yoxdur');
        } else if (status === 404) {
            errorToast('Məlumat tapılmadı');
        } else if (status === 422) {
            errorToast('Daxil edilən məlumatlar düzgün deyil');
        } else if (status === 500) {
            errorToast('Server xətası baş verdi');
        } else if (status !== 401) { 
            errorToast('Xəta baş verdi, yenidən cəhd edin');
        }

        return Promise.reject(error);
    },
);

export default axiosInstance;