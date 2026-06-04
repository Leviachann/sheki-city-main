import { useQuery } from 'react-query';
import axiosInstance from 'core/configs/axios.config';

export interface IBannerResponse {
  id: number;
  imageUrl: string;
  ctaUrl: string | null;
  sortOrder: number;
  isActive: boolean;
  startsAt: string;
  endsAt: string;
  translation: {
    title: string | null;
    subtitle: string | null;
    ctaText: string | null;
  };
}

export const useGetAboutClubBanner = (lang = 'az') => {
  return useQuery<IBannerResponse, Error>(
    ['aboutClubBanner', lang],
    async () => {
      const response = await axiosInstance.get<IBannerResponse>('/Banners/15', {
        headers: {
          'X-Lang-Code': lang,
        },
        withCredentials: false, 
      });
      return response.data;
    },
    {
      refetchOnWindowFocus: false,
    }
  );
};