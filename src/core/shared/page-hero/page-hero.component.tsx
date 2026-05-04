import React from 'react';
import { usePageHeroStyles } from './page-hero.style';
import { PageHeroWave } from 'assets/images/icons/pagehero-wave';

interface PageHeroProps {
  title: string;
  subtitle?: string;
}

const PageHeroComponent = ({ title, subtitle }: PageHeroProps) => {
  const classes = usePageHeroStyles();

  return (
    <div className={classes.heroContainer}>
      <PageHeroWave className={classes.waveSvg} />
      
      <div className={classes.content}>
        <h1 className={classes.title}>{title}</h1>
        {subtitle && <p className={classes.subtitle}>{subtitle}</p>}
      </div>
    </div>
  );
};

export default PageHeroComponent;