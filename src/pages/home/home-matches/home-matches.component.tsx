import React from 'react';
import { useNavigate } from 'react-router-dom';
import useLocalization from 'assets/lang';
import MatchCard from 'core/shared/match-card/match-card.component';
import { useGetMatches } from 'pages/oyunlar/actions/oyunlar.query';
import { S3_BASE_URL } from 'core/configs/axios.config';
import { Routes } from 'router/routes';
import { ArrowLink } from 'assets/images/icons/arrows'; 
import { useHomeMatchesStyles } from './home-matches.style';
import liqaLogoImg from 'assets/images/statics/liqaLogo.png';
import homeLogoImg from 'assets/images/statics/homeLogo.png';

const HomeMatchesComponent = () => {
  const translate = useLocalization();
  const classes = useHomeMatchesStyles();
  const navigate = useNavigate();

  const { data: matchesList = [], isLoading } = useGetMatches(1, 100, 'az');

  const featuredMatches = matchesList.slice(0, 3);

  const handleViewAllClick = () => {
    navigate(Routes.oyunlar || '/oyunlar');
  };

  if (isLoading || featuredMatches.length === 0) return null;

  return (
    <section className={classes.section}>
      <div className={classes.container}>
        <div className={classes.header}>
          <div className={classes.titleWrapper}>
            <h2 className={classes.title}>{translate('oyunlar')}</h2>
            <p className={classes.subtitle}>
              Sheki City futbol klubunun keçirəcəyi oyunlar
            </p>
          </div>
          <div className={classes.viewAllLink} onClick={handleViewAllClick}>
            <span>Bütün oyunlar</span>
            <ArrowLink />
          </div>
        </div>

        <div className={classes.grid}>
          {featuredMatches.map((item, index) => (
            <MatchCard
              key={item.id || index}
              id={item.id}
              matchDate={item.matchDate}
              liqaLogo={liqaLogoImg}
              homeClubName={item.homeClubName}
              homeLogo={homeLogoImg}
              kickOffTime={item.kickOffTime ? item.kickOffTime.slice(0, 5) : '00:00'}
              homeScore={item.homeScore}
              awayScore={item.awayScore}
              awayClubName={item.awayClubName}
              competitionLogoUrl={`${S3_BASE_URL}${item.competitionLogoUrl}`}
              variant="compact"
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default HomeMatchesComponent;