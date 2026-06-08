import { Player } from './player-card';
import { usePlayerCardStyles } from './player-card.style';
import { S3_BASE_URL } from 'core/configs/axios.config';
import { Routes, goTo } from 'router/routes';
import { useNavigate } from 'react-router-dom';

interface PlayerCardProps {
  player: Player;
  variant: 'light' | 'dark';
}

const LOCAL_PLACEHOLDER = `data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="280" height="280" viewBox="0 0 280 280"><rect width="100%" height="100%" fill="%23e0e0e0"/><text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" font-family="sans-serif" font-size="16" fill="%23666666">Sheki City FC</text></svg>`;

const PlayerCard = ({ player, variant }: PlayerCardProps) => {
  const classes = usePlayerCardStyles({ variant });
    const navigate = useNavigate();

  const rawImagePath = player.positionName || '';
  const cleanImagePath = rawImagePath.trim();
  
  const playerImage = cleanImagePath ? `${S3_BASE_URL}${cleanImagePath}` : LOCAL_PLACEHOLDER;
  const positionLabel = player.photoUrl || 'Oyunçu';
const handleNavigate = () => {
  navigate(goTo(Routes.oyuncuDetail, player.id), { state: { player } });
};
  const handleImageError = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
    const currentTarget = e.currentTarget;
    
    if (currentTarget.src !== LOCAL_PLACEHOLDER) {
      currentTarget.src = LOCAL_PLACEHOLDER;
    }
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