import axiosInstance from 'core/configs/axios.config';
import { API } from 'core/configs/api.config';
import { IProduct } from '../mehsullar.d';

export const getProductDetail = async (productId: string | number): Promise<IProduct> => {
    const url = API.mehsulDetail.replace(':id', String(productId));
    const response = await axiosInstance.get<IProduct>(url);
    return response.data;
};
