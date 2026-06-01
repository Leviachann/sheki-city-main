import { useQuery } from 'react-query';
import { getGroupedAchievements } from './nailiyyetler.service';
import { IAchievementGrouped } from '../nailiyyetler';

export const useGetGroupedAchievements = (lang = 'az') => {
    return useQuery<IAchievementGrouped[], Error>(
        ['achievementsGrouped', lang],
        () => getGroupedAchievements(lang),
        {
            refetchOnWindowFocus: false,
        }
    );
};