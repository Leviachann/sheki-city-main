import React from 'react';
import HomeBanner from './home-banner/home-banner.component';
import HomeMatchesComponent from './home-matches/home-matches.component';
import HomePlayersComponent from './home-players/home-players.component';
import HomeProductsComponent from './home-products/home-products.component';

const HomeComponent = () => {
  return (
    <div>
      <HomeBanner />
      <HomeMatchesComponent />
      <HomePlayersComponent />
      <HomeProductsComponent />
    </div>
  );
};

export default HomeComponent;