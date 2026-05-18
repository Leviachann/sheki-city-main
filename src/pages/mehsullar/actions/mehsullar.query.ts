import { useQuery } from 'react-query';
import { getProducts } from './mehsullar.service';
import { IProductsResponse } from '../mehsullar.d';

export const useGetProducts = (
    page = 1,
    pageSize = 6,
    search?: string,
    categoryId?: number
) => {
    return useQuery<IProductsResponse, Error>(
        ['products', page, pageSize, search, categoryId],
        () => getProducts(page, pageSize, search, categoryId),
        {
            keepPreviousData: true,
        }
    );
};
