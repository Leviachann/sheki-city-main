import { Link } from 'react-router-dom';
import { AboutCardProps } from './about-card';
import { useAboutCardStyles } from './about-card.style';
import useLocalization from 'assets/lang';
import { ArrowLink } from 'assets/images/icons/arrows';

const AboutCard = ({ title, description, image, linkTo }: AboutCardProps) => {
  const classes = useAboutCardStyles();
  const translate = useLocalization();

  return (
    <Link to={linkTo} className={classes.cardWrapper}>
      <img src={image} alt={title} className={classes.bgImage} />
      <div className={classes.gradientOverlay} />
      <div className={classes.content}>
        <h3 className={classes.title}>{title}</h3>
        <p className={classes.description}>{description}</p>
        
        <div className={classes.linkText}>
          <span>{translate('etrafli') as string}</span>
          <ArrowLink />
        </div>
      </div>
    </Link>
  );
};

export default AboutCard;