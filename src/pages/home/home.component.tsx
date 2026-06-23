import React from 'react';
import HomeBanner from './home-banner/home-banner.component';
import HomeMatchesComponent from './home-matches/home-matches.component';
import HomePlayersComponent from './home-players/home-players.component';
import HomeProductsComponent from './home-products/home-products.component';
import HomePartnersComponent from './home-partners/home-partners.component';
import HomeNewsComponent from './home-news/home-news.component';

const HomeComponent = () => {
  return (
    <div>
      <HomeBanner />
      <HomeMatchesComponent />
      <HomePlayersComponent />
      <HomeProductsComponent />
      <HomePartnersComponent />
      <HomeNewsComponent />
    </div>
  );
};

export default HomeComponent;