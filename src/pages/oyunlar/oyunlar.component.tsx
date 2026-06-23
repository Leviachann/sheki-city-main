import React, { useState, useMemo } from 'react';
import { Pagination } from 'antd';
import useLocalization from 'assets/lang';
import PageHeroComponent from 'core/shared/page-hero/page-hero.component';
import PageHeaderComponent from 'core/shared/section-header/section-header.component';
import MatchCard from 'core/shared/match-card/match-card.component';
import { S3_BASE_URL } from 'core/configs/axios.config';
import { useGetMatches } from './actions/oyunlar.query';
import { useOyunlarStyles } from './oyunlar.style';
import { useMediaQuery } from 'core/helpers/use-media-query';
import liqaLogoImg from '../../assets/images/statics/liqaLogo.png';
import homeLogoImg from '../../assets/images/statics/homeLogo.png';

const OyunlarComponent = () => {
  const translate = useLocalization();
  const classes = useOyunlarStyles();
  const isMobile = useMediaQuery('(max-width: 768px)');

  const { data: matchesList = [] } = useGetMatches(1, 100, 'az');
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [selectedTeam, setSelectedTeam] = useState<string>('all');
  
  const pageSize = 7; 

  const dynamicTeamOptions = useMemo(() => {
    const uniqueTeams = new Set<string>();
    matchesList.forEach((match) => {
      if (match.awayClubName) uniqueTeams.add(match.awayClubName);
    });

    return [
      { label: (translate('hamisi') as string), value: 'all' },
      ...Array.from(uniqueTeams).map((teamName) => ({
        label: teamName,
        value: teamName,
      })),
    ];
  }, [matchesList, translate]);

  const filteredMatches = useMemo(() => {
    if (selectedTeam === 'all') return matchesList;
    return matchesList.filter((match) => match.awayClubName === selectedTeam);
  }, [selectedTeam, matchesList]);

  const paginatedMatches = useMemo(() => {
    const startIndex = (currentPage - 1) * pageSize;
    return filteredMatches.slice(startIndex, startIndex + pageSize);
  }, [filteredMatches, currentPage, pageSize]);

  const totalCount = filteredMatches.length;

  const handleTeamChange = (value: string | number) => {
    setSelectedTeam(String(value));
    setCurrentPage(1); 
  };

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    window.scrollTo({ top: 300, behavior: 'smooth' });
  };

  return (
    <>
      <PageHeroComponent
        title={translate('oyunlar') as string}
        subtitle={translate('oyunlar_desc') as string}
      />
      
      <PageHeaderComponent
        current={translate('geri') as string}
        filters={[
          {
            label: translate('reqib_komanda') as string,
            defaultValue: 'all',
            options: dynamicTeamOptions,
            onChange: handleTeamChange,
          },
        ]}
      />

      <section className={classes.container}>
        <h2 className={classes.sectionTitle}>{translate('oyunlar_neticeleri') as string}</h2>
        
        <div className={classes.grid}>
          {paginatedMatches.map((item, index) => (
            <MatchCard
              key={item.id || index}
              id={item.id}
              matchDate={item.matchDate}
              liqaLogo={liqaLogoImg}
              homeClubName={item.homeClubName}
              homeLogo={homeLogoImg}
              kickOffTime={item.kickOffTime ? item.kickOffTime.slice(0, 5) : '00:00'}
              homeScore={item.homeScore}
              awayScore={item.awayScore}
              awayClubName={item.awayClubName}
              competitionLogoUrl={`${S3_BASE_URL}${item.competitionLogoUrl}`}
              variant={isMobile ? 'compact' : 'horizontal'}
            />
          ))}
        </div>

        {totalCount > pageSize && (
          <div className={classes.paginationContainer}>
            <Pagination
              current={currentPage}
              total={totalCount}
              pageSize={pageSize}
              onChange={handlePageChange}
              showSizeChanger={false}
            />
          </div>
        )}
      </section>
    </>
  );
};

export default OyunlarComponent;