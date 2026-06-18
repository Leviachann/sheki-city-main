import { useQuery } from 'react-query';
import axios from 'axios';
import { BackendSizeOption } from '../size-selector.interface';

export const useGetProductSizes = () => {
    return useQuery<BackendSizeOption[]>({
        queryKey: ['productSizes'],
        queryFn: async () => {
            const response = await axios.get('https://dev-football-club-api.azintelecom.az/api/v1/ProductSizes');
            return response.data;
        },
        select: (data) => [...data].sort((a, b) => a.sortOrder - b.sortOrder),
    });
};