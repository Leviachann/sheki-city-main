import { useMatchCardStyles } from './match-card.style';
import { MatchCardProps } from './match-card';
import { ArrowLink } from 'assets/images/icons/arrows';
import { Routes, goTo } from 'router/routes';
import { useNavigate } from 'react-router-dom';

const MatchCard = ({
  id,
  matchDate,
  liqaLogo,
  homeClubName,
  homeLogo,
  kickOffTime,
  homeScore,
  awayScore,
  awayClubName,
  competitionLogoUrl,
}: MatchCardProps) => {
  const classes = useMatchCardStyles();
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate(goTo(Routes.oyunDetail, id));
  };

  const isUpcoming = homeScore === 0 && awayScore === 0;

  const formattedTime = kickOffTime && kickOffTime.includes(':') 
    ? kickOffTime.split(':').slice(0, 2).join(':') 
    : kickOffTime;

  return (
    <div className={classes.card}>
      <div className={classes.leagueWrapper}>
        <img src={liqaLogo} alt="League Logo" className={classes.image} />
      </div>

      <div className={classes.contentWrapper}>
        <div className={classes.homeTeam}>
          <h3 className={classes.clubName}>{homeClubName}</h3>
          <div className={classes.teamLogoWrapper}>
            <img src={homeLogo} alt={homeClubName} className={classes.image} />
          </div>
        </div>

        <div className={classes.scoreColumn}>
          <span className={classes.matchDate}>{matchDate}</span>
          <div className={classes.scoreBox}>
            {isUpcoming ? (
              <span className={classes.scoreText}>{formattedTime}</span>
            ) : (
              <>
                <span className={classes.scoreText}>{homeScore}</span>
                <span>:</span>
                <span className={classes.scoreText}>{awayScore}</span>
              </>
            )}
          </div>
        </div>

        <div className={classes.awayTeam}>
          <div className={classes.teamLogoWrapper}>
            <img src={competitionLogoUrl} alt={awayClubName} className={classes.image} />
          </div>
          <h3 className={classes.clubName}>{awayClubName}</h3>
        </div>
      </div>

        <div className={classes.moreLink} onClick={handleNavigate}>
          <ArrowLink />
        </div>
    </div>
  );
};

export default MatchCard;