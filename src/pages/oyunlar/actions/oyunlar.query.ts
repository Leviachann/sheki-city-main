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

export const useGetMatchById = (id: number | string, lang = 'az') => {
  return useQuery<IMatchGrouped | undefined, Error>(
    ['match', id, lang],
    async () => {
      const allMatches = await getMatches(1, 100, lang);
      return allMatches.find((match) => match.id === Number(id));
    },
    {
      refetchOnWindowFocus: false,
    }
  );
};