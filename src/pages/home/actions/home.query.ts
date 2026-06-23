import { useQuery } from 'react-query';
import axios from 'core/configs/axios.config';

export interface IPartner {
  id: number;
  name: string;
  logoUrl: string;
  websiteUrl: string;
  sortOrder: number;
  isActive: boolean;
}

interface IPartnerResponse {
  value: IPartner[];
  isSuccess: boolean;
}

export const useGetPartners = () => {
  return useQuery<IPartner[]>({
    queryKey: ['partners'],
    queryFn: async () => {
      const response = await axios.get<IPartnerResponse>('/Partner', {
        withCredentials: false,
      });
      
      return (response.data?.value || [])
        .filter((partner) => partner.isActive)
        .sort((a, b) => a.sortOrder - b.sortOrder);
    },
  });
};