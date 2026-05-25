import { useQuery } from 'react-query';
import { getXeberler, getXeberById } from './xeberler.service';
import { IXeberlerResponse, IXeber } from '../xeberler.d';

export const useGetXeberler = (
    page = 1,
    pageSize = 6,
    categoryId?: number,
    authorId?: number,
    lang = 'az'
) => {
    return useQuery<IXeberlerResponse, Error>(
        ['xeberler', page, pageSize, categoryId, authorId, lang],
        () => getXeberler(page, pageSize, categoryId, authorId, lang),
        {
            keepPreviousData: true,
        }
    );
};

export const useXeber = (id: number, lang = 'az') => {
    return useQuery<IXeber, Error>(
        ['xeber', id, lang],
        () => getXeberById(id, lang),
        {
            enabled: !!id,
            refetchOnWindowFocus: false,
        }
    );
};