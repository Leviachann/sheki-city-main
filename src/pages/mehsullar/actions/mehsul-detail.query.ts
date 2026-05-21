import { useQuery } from 'react-query';
import { getProductDetail } from './mehsul-detail.service';
import { IProduct } from '../mehsullar.d';

export const useGetProductDetail = (productId?: string | number) => {
    return useQuery<IProduct, Error>(
        ['product', productId],
        () => getProductDetail(productId as string | number),
        {
            enabled: Boolean(productId),
            retry: false,
        }
    );
};
