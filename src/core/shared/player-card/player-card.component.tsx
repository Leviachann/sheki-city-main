import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Player } from './player-card';
import { usePlayerCardStyles } from './player-card.style';
import { S3_BASE_URL } from 'core/configs/axios.config';
import { Routes, goTo } from 'router/routes';
import defaultPlayerPlaceholder from 'assets/images/statics/mock-player-detail.png';

interface PlayerCardProps {
  player: Player;
  variant: 'light' | 'dark';
}

const PlayerCard = ({ player, variant }: PlayerCardProps) => {
  const classes = usePlayerCardStyles({ variant });
  const navigate = useNavigate();

  const cleanPhotoPath = player.photoUrl?.trim() || '';
  const playerImage = cleanPhotoPath ? `${S3_BASE_URL}${cleanPhotoPath}` : defaultPlayerPlaceholder;
  const positionLabel = player.positionName || 'Oyunçu';

  const handleNavigate = () => {
    navigate(goTo(Routes.oyuncuDetail, player.id), { state: { player } });
  };

  const handleImageError = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
    e.currentTarget.src = defaultPlayerPlaceholder;
  };

  return (
    <div className={classes.card} onClick={handleNavigate}>
      <div className={classes.numberContainer}>
        <span className={classes.jerseyNumber}>
          {player.jerseyNumber !== undefined ? player.jerseyNumber.toString().padStart(2, '0') : '00'}
        </span>
      </div>
      
      <div className={classes.imageWrapper}>
        <img 
          src={playerImage} 
          alt={player.fullName} 
          className={classes.image}  
          onError={handleImageError}
        />
      </div>

      <div className={classes.infoSection}>
        <h3 className={classes.name}>{player.fullName}</h3>
        <p className={classes.position}>{positionLabel}</p>
      </div>
    </div>
  );
};

export default PlayerCard;