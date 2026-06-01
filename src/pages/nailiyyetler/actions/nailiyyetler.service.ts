import axiosInstance from 'core/configs/axios.config';

export const getGroupedAchievements = async (lang = 'az'): Promise<any> => {
    const response = await axiosInstance.get('/Achievements/grouped', {
        headers: {
            'X-Lang-Code': lang,
        },
        withCredentials: false 
    });
    return response.data;
};