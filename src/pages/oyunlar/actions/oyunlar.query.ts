import { useQuery } from 'react-query';
import { getMatches } from './oyunlar.service';
import { IMatchGrouped } from '../oyunlar';

export const useGetMatches = (pageNumber = 1, pageSize = 20, lang = 'az') => {
    return useQuery<IMatchGrouped[], Error>(
        ['matches', pageNumber, pageSize, lang],
        () => getMatches(pageNumber, pageSize, lang),
        {
            keepPreviousData: true,
            refetchOnWindowFocus: false,
        }
    );
};