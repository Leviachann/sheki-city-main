import PageHeaderComponent from 'core/shared/section-header/section-header.component';
import useLocalization from 'assets/lang';
import AboutCard from '../../core/shared/about-club/about-card.component';
import ClubBanner from './club-banner/club-banner.component'; // Import here
import { useKlubHaqqindaStyles } from './klub-haqqinda.style';
import historyBg from 'assets/images/statics/club-history-cover.png';
import achievementsBg from 'assets/images/statics/achievements-cover.jpg';
import playersBg from 'assets/images/statics/players-cover.jpg';
import { Routes } from 'router/routes';

const KlubHaqqindaComponent = () => {
  const translate = useLocalization();
  const classes = useKlubHaqqindaStyles(); 

  const aboutCardsData = [
    {
      title: (translate('klub_tarixi') as string) || 'Klub tarixi',
      description: (translate('klub_tarixi_desc') as string),
      image: historyBg,
      linkTo: Routes.klubTarixi,
    },
    {
      title: (translate('nailiyyetler_title') as string),
      description: (translate('nailiyyetler_desc') as string),
      image: achievementsBg,
      linkTo: Routes.nailiyyetler,
    },
    {
      title: (translate('oyuncu_profili') as string),
      description: (translate('oyuncu_profili_desc') as string),
      image: playersBg,
      linkTo: Routes.oyunlar,
    },
  ];

  return (
    <div >
      <ClubBanner />
      <PageHeaderComponent current={translate('geri') as string} />
      <div className={classes.textContainer}>
        <p className={classes.aboutText}>{translate('klub_haqqinda_short_desc') as string}</p>
      </div>
      <div className={classes.gridContainer}>
        {aboutCardsData.map((card, index) => (
          <AboutCard
            key={index}
            title={card.title}
            description={card.description}
            image={card.image}
            linkTo={card.linkTo}
          />
        ))}
      </div>
    </div>
  );
};

export default KlubHaqqindaComponent;