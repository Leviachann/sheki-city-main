import { useQuery } from 'react-query';
import { getProductDetail } from './mehsul-detail.service';
import { IProduct } from '../mehsullar.d';

export const useGetProductDetail = (productId?: string | number, lang = 'az') => {
    return useQuery<IProduct, Error>(
        ['product', productId, lang],
        () => getProductDetail(productId as string | number, lang),
        {
            enabled: Boolean(productId),
            retry: false,
        }
    );
};