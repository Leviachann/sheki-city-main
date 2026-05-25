import axiosInstance from 'core/configs/axios.config';
import { API } from 'core/configs/api.config';
import { INewsCategory } from '../models/xeberler-category.model';

export const getNewsCategories = async (lang = 'az'): Promise<INewsCategory[]> => {
    try {
        const response = await axiosInstance.get<INewsCategory[]>(API.xeberCategories, {
            headers: {
                'X-Lang-Code': lang,
            },
            withCredentials: false
        });
        return response.data;
    } catch (_error) {
        return [];
    }
};