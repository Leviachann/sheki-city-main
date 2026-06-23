import React from 'react';
import HomeBanner from './home-banner/home-banner.component';
import HomeMatchesComponent from './home-matches/home-matches.component';

const HomeComponent = () => {
  return (
    <div>
      <HomeBanner />
      <HomeMatchesComponent />
    </div>
  );
};

export default HomeComponent;