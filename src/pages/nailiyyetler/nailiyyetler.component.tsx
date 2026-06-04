import PageHeroComponent from 'core/shared/page-hero/page-hero.component';
import useLocalization from 'assets/lang';
import PageHeaderComponent from 'core/shared/section-header/section-header.component';
import AchievementsCard from 'core/shared/achievements-card/achievements-card.component';
import { useGetGroupedAchievements } from './actions/nailiyyetler.query';
import { useNailiyyetlerStyles } from './nailiyyetler.style';
import achievementImg from '../../assets/images/statics/achievement.png';
import { NailiyyetlerIcon } from 'assets/images/icons/left-menu';

const NailiyyetlerComponent = () => {
    const translate = useLocalization(); 
    const classes = useNailiyyetlerStyles();
    const { data: achievementsList = []} = useGetGroupedAchievements('az');

return (
        <div>
            <PageHeroComponent
                title={translate('nailiyyetler_title')}
                subtitle={translate('nailiyyetler_desc')}
            />

            <PageHeaderComponent current={translate('geri') as string} />
            
            <section>
                { achievementsList.length === 0 ? (
                    <div className={classes.emptyCard}>
                        <div className={classes.iconWrapper}>
                            <NailiyyetlerIcon />
                        </div>
                        <p className={classes.emptyText}>
                            {translate('hech_bir_nailiyyet_yoxdur') || 'Əldə edilmiş heç bir nailiyyət yoxdur'}
                        </p>
                    </div>
                ) : (
                    <div className={classes.grid}>
                        {achievementsList.map((item, index) => (
                            <AchievementsCard 
                                key={index}
                                id={index}
                                image={achievementImg} 
                                title={item.typeName}  
                                date={item.years && item.years.length > 0 ? item.years.join(', ') : '---'} 
                                count={String(item.count)} 
                            />
                        ))}
                    </div>
                )}
            </section>
        </div>
    );
};


export default NailiyyetlerComponent;