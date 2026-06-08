import axiosInstance from 'core/configs/axios.config';
import { Player, Position } from '../oyuncu-profili';

interface ApiResponse<T> {
  items: T[];
  page: number;
  pageSize: number;
  totalCount: number;
  hasNextPage: boolean;
  hasPrevPage: boolean;
}

export const PlayersService = {
  getPlayers: async (page: number, pageSize: number, lang = 'az'): Promise<ApiResponse<Player>> => {
    const response = await axiosInstance.get<ApiResponse<Player>>('/Players', {
      params: { page, pageSize },
      headers: { 'X-Lang-Code': lang },
      withCredentials: false,
    });
    return response.data;
  },
  getPositions: async (page: number, pageSize: number, lang = 'az'): Promise<ApiResponse<Position>> => {
    const response = await axiosInstance.get<ApiResponse<Position>>('/Position', {
      params: { page, pageSize },
      headers: { 'X-Lang-Code': lang },
      withCredentials: false,
    });
    return response.data;
  },
};