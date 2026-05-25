import axiosInstance from 'core/configs/axios.config';
import { API } from 'core/configs/api.config';
import { IXeberlerResponse } from '../xeberler.d';
import { IXeber } from '../xeberler.d';

export const getXeberler = async (
    page = 1,
    pageSize = 6,
    categoryId?: number,
    authorId?: number,
    lang = 'az'
): Promise<IXeberlerResponse> => {
        const response = await axiosInstance.get<IXeberlerResponse>(API.xeberler, {
            params: {
                page,
                pageSize,
                ...(categoryId && { categoryId }),
                ...(authorId && { authorId }),
            },
            headers: {
                'X-Lang-Code': lang,
            },
            withCredentials: false 
        });
        return response.data;
};

export const getXeberById = async (id: number, lang = 'az'): Promise<IXeber> => {
        const response = await axiosInstance.get<IXeber>(
            API.xeberDetail.replace(':id', String(id)),
            {
                headers: {
                    'X-Lang-Code': lang,
                },
                withCredentials: false
            }
        );
        return response.data;
};