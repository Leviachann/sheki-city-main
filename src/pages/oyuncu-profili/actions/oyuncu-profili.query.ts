import { useQuery } from 'react-query';
import { PlayersService } from './oyuncu-profili.service';

export const PLAYERS_QUERY_KEYS = {
  allPlayers: (page: number, pageSize: number) => ['players', { page, pageSize }] as const,
  allPositions: (page: number, pageSize: number) => ['positions', { page, pageSize }] as const,
};

export const useGetPlayers = (page: number, pageSize: number) => {
  return useQuery({
    queryKey: PLAYERS_QUERY_KEYS.allPlayers(page, pageSize),
    queryFn: () => PlayersService.getPlayers(page, pageSize),
    keepPreviousData: true,
  });
};

export const useGetPositions = (page: number, pageSize: number) => {
  return useQuery({
    queryKey: PLAYERS_QUERY_KEYS.allPositions(page, pageSize),
    queryFn: () => PlayersService.getPositions(page, pageSize),
    staleTime: 1000 * 60 * 30, // Positions are mostly static lookup metadata
  });
};