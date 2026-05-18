import axiosInstance from 'core/configs/axios.config';
import { API } from 'core/configs/api.config';
import { IProductsResponse } from '../mehsullar.d';

export const getProducts = async (
    page = 1,
    pageSize = 6,
    search?: string,
    categoryId?: number
): Promise<IProductsResponse> => {
    try {
        const response = await axiosInstance.get<IProductsResponse>(API.mehsullar, {
            params: {
                page,
                pageSize,
                ...(search && { search }),
                ...(categoryId && { categoryId }),
            }
        });
        return response.data;
    } catch (error) {
        console.error('Failed to fetch products', error);
        throw error;
    }
};
