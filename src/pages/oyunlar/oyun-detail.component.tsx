import { useParams } from 'react-router-dom';
import useLocalization from 'assets/lang';
import PageHeaderComponent from 'core/shared/section-header/section-header.component';
import { useGetMatchById } from './actions/oyunlar.query';
import { useOyunDetailStyles } from './oyun-detail.style';
import { S3_BASE_URL } from 'core/configs/axios.config';
import homeLogoImg from '../../assets/images/statics/homeLogo.png';
import liqaLogoImg from '../../assets/images/statics/liqaLogo.png';

const OyunDetailComponent = () => {
  const translate = useLocalization();
  const classes = useOyunDetailStyles();
  const { id } = useParams<{ id: string }>();

  const { data: match} = useGetMatchById(id || '');

  if (!match) {
    return '';
  }

  const isUpcoming = match.homeScore === 0 && match.awayScore === 0;
  const formattedTime = match.kickOffTime
    ? match.kickOffTime.slice(0, 5)
    : '00:00';

  return (
    <div className={classes.pageWrapper}>
      <PageHeaderComponent current={translate('geri') as string} />

      <div className={classes.detailCard}>
        <div className={classes.leagueHeader}>
          <img
            src={liqaLogoImg} 
            alt='League Logo'
            className={classes.leagueLogo}
          />
        </div>

        <div className={classes.scoreboardRow}>
          <div className={classes.teamContainer}>
            <div className={classes.logoWrapper}>
              <img
                src={homeLogoImg}
                alt={match.homeClubName}
                className={classes.teamLogo}
              />
            </div>
            <h2 className={classes.teamName}>{match.homeClubName}</h2>
          </div>

          <div className={classes.centerInfoStack}>
            {isUpcoming ? (
              <h2 className={classes.scoreText}>{formattedTime}</h2>
            ) : (
              <h2
                className={classes.scoreText}
              >{`${match.homeScore} : ${match.awayScore}`}</h2>
            )}

            <h3 className={classes.dateText}>{match.matchDate}</h3>
            <p className={classes.vsText}>vs</p>
          </div>

          <div className={classes.teamContainer}>
            <div className={classes.logoWrapper}>
              <img
                src={`${S3_BASE_URL}${match.competitionLogoUrl}`}
                alt={match.awayClubName}
                className={classes.teamLogo}
              />
            </div>
            <h2 className={classes.teamName}>{match.awayClubName}</h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OyunDetailComponent;
