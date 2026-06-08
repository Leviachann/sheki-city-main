import { useQuery } from 'react-query';
import { VacanciesService } from './vakansiyalar.service';
import { VacancyResponse, SingleVacancy } from '../vacancy.type';

export const VACANCIES_QUERY_KEYS = {
  allVacancies: (page: number, pageSize: number, lang: string) => ['vacancies', { page, pageSize, lang }] as const,
  vacancyBySlug: (slug: string, lang: string) => ['vacancy', { slug, lang }] as const,
};

export const useGetVacanciesQuery = (page: number, pageSize: number, lang = 'az') => {
  return useQuery<VacancyResponse, Error>({
    queryKey: VACANCIES_QUERY_KEYS.allVacancies(page, pageSize, lang),
    queryFn: () => VacanciesService.getVacancies(page, pageSize, lang),
    keepPreviousData: true, 
    staleTime: 5 * 60 * 1000, 
  });
};

export const useGetVacancyBySlugQuery = (slug: string, lang = 'az') => {
  return useQuery<SingleVacancy, Error>({
    queryKey: VACANCIES_QUERY_KEYS.vacancyBySlug(slug, lang),
    queryFn: () => VacanciesService.getVacancyBySlug(slug, lang),
    enabled: !!slug,
  });
};