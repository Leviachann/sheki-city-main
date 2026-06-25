import React, { useState, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import useLocalization from 'assets/lang';
import PlayerCard from 'core/shared/player-card/player-card.component';
import { useGetPlayers, useGetPositions } from 'pages/oyuncu-profili/actions/oyuncu-profili.query';
import { Routes } from 'router/routes';
import { ArrowLink } from 'assets/images/icons/arrows';
import { useHomePlayersStyles } from './home-players.style';

const HomePlayersComponent = () => {
  const translate = useLocalization();
  const classes = useHomePlayersStyles();
  const navigate = useNavigate();

  const [selectedPosition, setSelectedPosition] = useState<string>('all');

  const { data: playersData } = useGetPlayers(1, 100);
  const { data: positionsData } = useGetPositions(1, 10);

  const rawPlayers = playersData?.items;
  const rawPositions = positionsData?.items;

  const filterTabs = useMemo(() => {
    const positionsList = rawPositions || [];
    return [
      { label: (translate('hamisi') as string), value: 'all' },
      ...positionsList.map((pos) => ({
        label: pos.name,
        value: pos.id.toString(),
      })),
    ];
  }, [rawPositions, translate]);

  const filteredPlayers = useMemo(() => {
    const playersList = rawPlayers || [];
    if (selectedPosition === 'all') return playersList;
    return playersList.filter((p) => p.positionId.toString() === selectedPosition);
  }, [rawPlayers, selectedPosition]);

  const featuredPlayers = useMemo(() => {
    return filteredPlayers.slice(0, 3);
  }, [filteredPlayers]);

  const handleViewAllClick = () => {
    navigate(Routes.oyuncuProfili);
  };

  if (!playersData) return null;

  return (
    <section className={classes.section}>
      <div className={classes.container}>
        <div className={classes.header}>
          <div className={classes.titleWrapper}>
            <h2 className={classes.title}>{translate('oyuncu_profili')}</h2>
            <p className={classes.subtitle}>
              Sheki City futbol klubunun futbolçuları
            </p>
          </div>
          <div className={classes.viewAllLink} onClick={handleViewAllClick}>
            <span>Bütün oyunçular</span>
            <ArrowLink />
          </div>
        </div>
        <div className={classes.filterContainer}>
          {filterTabs.map((tab) => (
            <button
              key={tab.value}
              className={`${classes.pillButton} ${
                selectedPosition === tab.value ? classes.activePillButton : ''
              }`}
              onClick={() => setSelectedPosition(tab.value)}
            >
              {tab.label}
            </button>
          ))}
        </div>
        {featuredPlayers.length > 0 ? (
          <div className={classes.grid}>
            {featuredPlayers.map((player) => (
              <div key={player.id} className={classes.homepageCardOverride}>
                <PlayerCard player={player} variant='dark' />
              </div>
            ))}
          </div>
        ) : (
          <div className={classes.noPlayersMessage}>
            {translate('oyuncu_yoxdur')}
          </div>
        )}
      </div>
    </section>
  );
};

export default HomePlayersComponent;