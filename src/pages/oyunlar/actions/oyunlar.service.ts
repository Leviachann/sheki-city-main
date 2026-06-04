import axiosInstance from 'core/configs/axios.config';
import { IMatchGrouped } from '../oyunlar';

export const getMatches = async (
    pageNumber = 1,
    pageSize = 20,
    lang = 'az'
): Promise<IMatchGrouped[]> => {
    const response = await axiosInstance.get<IMatchGrouped[]>('/Matches', {
        params: {
            pageNumber,
            pageSize,
        },
        headers: {
            'X-Lang-Code': lang,
        },
        withCredentials: false 
    });
    return response.data;
};