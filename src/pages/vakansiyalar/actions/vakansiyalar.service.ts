import axiosInstance from 'core/configs/axios.config';
import { VacancyResponse, SingleVacancy } from '../vacancy.type';

export const VacanciesService = {
  getVacancies: async (page: number, pageSize: number, lang = 'az'): Promise<VacancyResponse> => {
    const response = await axiosInstance.get<VacancyResponse>('/Vacancies', {
      params: { page, pageSize },
      headers: { 'X-Lang-Code': lang },
      withCredentials: false,
    });
    return response.data;
  },
  getVacancyById: async (vacancyId: number, lang = 'az'): Promise<SingleVacancy> => {
    const response = await axiosInstance.get<SingleVacancy>(`/Vacancies/${vacancyId}`, {
      headers: { 'X-Lang-Code': lang },
      withCredentials: false,
    });
    return response.data;
  },

  getVacancyBySlug: async (slug: string, lang = 'az'): Promise<SingleVacancy> => {
    const response = await axiosInstance.get<SingleVacancy>(`/Vacancies/by-slug/${slug}`, {
      params: { langCode: lang },
      withCredentials: false,
    });
    return response.data;
  },
};