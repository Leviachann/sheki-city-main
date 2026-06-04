import { useGetAboutClubBanner } from '../actions/klub-banner.query';
import { useClubBannerStyles } from './club-banner.style';
import { S3_BASE_URL } from 'core/configs/axios.config';

const ClubBanner = () => {
  const classes = useClubBannerStyles();
  const { data: banner, isLoading, error } = useGetAboutClubBanner('az');

  if (isLoading || error || !banner || !banner.isActive) {
    return null; 
  }

  return (
    <div className={classes.outerContainer}>
      <div className={classes.bannerWrapper}>
        <img 
          src={`${S3_BASE_URL}${banner.imageUrl}`} 
          alt={banner.translation.title || 'Banner'} 
          className={classes.bgImage} 
        />
        <div className={classes.overlay} />
        
        <div className={classes.content}>
          <h1 className={classes.title}>{banner.translation.title}</h1>
          <p className={classes.subtitle}>{banner.translation.subtitle}</p>
        </div>
      </div>

      <div className={`${classes.shadowFrame} ${classes.frameLayer1}`} />
      <div className={`${classes.shadowFrame} ${classes.frameLayer2}`} />
      <div className={`${classes.shadowFrame} ${classes.frameLayer3}`} />
    </div>
  );
};

export default ClubBanner;