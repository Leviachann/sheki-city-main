import { useQuery } from 'react-query';
import { getNewsCategories} from './xeber-categories.service';
import { INewsCategory } from '../models/xeberler-category.model';

export const useGetNewsCategories = (lang = 'az') => {
    return useQuery<INewsCategory[], Error>(
        ['newsCategories', lang],
        () => getNewsCategories(lang),
        {
            staleTime: 10 * 60 * 1000,
            refetchOnWindowFocus: false,
        }
    );
};