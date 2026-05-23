import { useQuery } from 'react-query';
import { getXeberler } from './xeberler.service';
import { IXeberlerResponse } from '../xeberler.d';

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