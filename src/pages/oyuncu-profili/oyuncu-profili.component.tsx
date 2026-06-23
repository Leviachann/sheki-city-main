import React, { useState, useMemo } from 'react';
import PageHeroComponent from 'core/shared/page-hero/page-hero.component';
import useLocalization from 'assets/lang';
import PageHeaderComponent from 'core/shared/section-header/section-header.component';
import PlayerCard from 'core/shared/player-card/player-card.component';
import { useGetPlayers, useGetPositions } from './actions/oyuncu-profili.query'; 
import { useOyuncuProfiliStyles } from './oyuncu-profili.style';

const OyuncuProfiliComponent = () => {
  const translate = useLocalization();
  const classes = useOyuncuProfiliStyles();

  const [selectedPosition, setSelectedPosition] = useState<string>('all');

  const { data: playersData } = useGetPlayers(1, 9);
  const { data: positionsData } = useGetPositions(1, 10);

  const rawPlayers = playersData?.items;
  const rawPositions = positionsData?.items;

  const positionFilterOptions = useMemo(() => {
    const positionsList = rawPositions || [];
    return [
      { label: (translate('hamisi') as string) || 'Hamısı', value: 'all' },
      ...positionsList.map((pos) => ({
        label: pos.name,
        value: pos.id.toString(),
      })),
    ];
  }, [rawPositions, translate]);

  const handlePositionChange = (value: string | number) => {
    setSelectedPosition(value.toString());
  };

  const filteredPlayers = useMemo(() => {
    const playersList = rawPlayers || [];
    if (selectedPosition === 'all') return playersList;
    return playersList.filter((player) => player.positionId.toString() === selectedPosition);
  }, [rawPlayers, selectedPosition]);

  return (
    <div>
      <PageHeroComponent
        title={translate('oyuncu_profili') as string}
        subtitle={translate('oyuncu_desc') as string}
      />
      
      <PageHeaderComponent
        current={translate('geri') as string}
        filters={[
          {
            label: (translate('movqe_filtri') as string) || 'Mövqe',
            defaultValue: 'all',
            options: positionFilterOptions,
            onChange: handlePositionChange,
          },
        ]}
      />

      <div className={classes.playersGrid}>
        {filteredPlayers.map((player) => (
          <PlayerCard 
            key={player.id} 
            player={player} 
            variant='light'
          />
        ))}
      </div>
    </div>
  );
};

export default OyuncuProfiliComponent;