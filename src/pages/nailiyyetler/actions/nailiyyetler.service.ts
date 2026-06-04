import axiosInstance from 'core/configs/axios.config';
import { IAchievementGrouped } from '../nailiyyetler'; 

export const getGroupedAchievements = async (lang = 'az'): Promise<IAchievementGrouped[]> => {
    const response = await axiosInstance.get<IAchievementGrouped[]>('/Achievements/grouped', {
        headers: {
            'X-Lang-Code': lang,
        },
        withCredentials: false 
    });
    return response.data;
};