import axios, { AxiosError } from 'axios';
import store from 'store/store.config';
import { setLoader } from 'store/store.reducer';
import { errorToast, successToast } from 'core/shared/toast/toast';

const isDevelopment = import.meta.env.DEV;
const API_BASE_URL = import.meta.env.VITE_APP_API_MAIN;
export const S3_BASE_URL = import.meta.env.VITE_APP_S3_BASE;

const axiosInstance = axios.create({
    baseURL: isDevelopment ? '/api/v1' : `${API_BASE_URL}/api/v1`,
    withCredentials: true, 
});

interface QueueItem {
    resolve: (value: string | null) => void;
    reject: (reason: AxiosError) => void;
}

let isRefreshing = false;
let failedQueue: QueueItem[] = [];

const processQueue = (error: AxiosError | null, token: string | null = null) => {
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
    const token = store.getState().user?.accessToken || localStorage.getItem('accessToken');
    if (token) {
        config.headers.Authorization = `Bearer ${token}`;
    }

    const { locale } = store.getState();
    const currentLang = Object.keys(locale || {}).length ? 'az' : 'az'; 
    config.headers['Accept-Language'] = currentLang;

    return config;
});

axiosInstance.interceptors.response.use(
    (response) => {
        store.dispatch(setLoader(false));

        if (['post', 'put', 'patch', 'delete'].includes(response.config.method ?? '')) {
            if (!response.config.url?.includes('/user/refresh') && !response.config.url?.includes('auth/refresh')) {
                successToast('Əməliyyat uğurla tamamlandı');
            }
        }

        return response;
    },
    async (error: AxiosError) => {
        store.dispatch(setLoader(false));
        const originalRequest = error.config as typeof error.config & { _retry?: boolean };
        const status = error.response?.status;

        if (status === 401 && !originalRequest._retry) {
            if (isRefreshing) {
                return new Promise((resolve, reject) => {
                    failedQueue.push({ resolve, reject });
                })
                .then((token) => {
                    if (originalRequest.headers) {
                        originalRequest.headers.Authorization = `Bearer ${token}`;
                    }
                    return axiosInstance(originalRequest);
                })
                .catch((err) => Promise.reject(err));
            }

            originalRequest._retry = true;
            isRefreshing = true;

            try {
                const refreshUrl = isDevelopment 
                    ? '/api/v1/user/refresh' 
                    : `${API_BASE_URL}/api/v1/user/refresh`;

                const refreshResponse = await axios.post(
                    refreshUrl, 
                    {}, 
                    { withCredentials: true }
                );
                const { accessToken } = refreshResponse.data;

                localStorage.setItem('accessToken', accessToken); 

                axiosInstance.defaults.headers.common['Authorization'] = `Bearer ${accessToken}`;
                if (originalRequest.headers) {
                    originalRequest.headers['Authorization'] = `Bearer ${accessToken}`;
                }

                processQueue(null, accessToken);
                isRefreshing = false;

                return axiosInstance(originalRequest);
            } catch (refreshError) {
                processQueue(refreshError as AxiosError, null);
                isRefreshing = false;

                errorToast('Sessiya müddəti bitib, yenidən daxil olun');
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
export const environment = {
    applicationName: import.meta.env.VITE_APP_TITLE as string,
    apiUrl: import.meta.env.VITE_APP_API_MAIN as string,
};