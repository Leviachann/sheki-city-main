import PageHeroComponent from 'core/shared/page-hero/page-hero.component';
import useLocalization from 'assets/lang';
import PageHeaderComponent from 'core/shared/section-header/section-header.component';
import VacancyCard from 'core/shared/vanacies-card/vacancy-card.component';
import { useVakansiyalarStyles } from './vakansiyalar.style';
import { useGetVacanciesQuery } from './actions/vakansiyalar.query';

const VakansiyalarComponent = () => {
  const translate = useLocalization();
  const classes = useVakansiyalarStyles();

  const currentPage = 1;
  const currentPageSize = 20;
  const activeLang = 'az'; 
  const { data, isLoading, isError } = useGetVacanciesQuery(currentPage, currentPageSize, activeLang);

  const vacancies = data?.items || [];
  const totalCount = data?.totalCount || 0;

  if (isLoading) {
    return (
      <div className={classes.pageContainer}>
      </div>
    );
  }

  if (isError) {
    return (
      <div className={classes.pageContainer}>
        <div className={classes.contentWrapper}>
          <p>{translate('input_required') || 'Xəta baş verdi. Yenidən yoxlayın.'}</p>
        </div>
      </div>
    );
  }

  return (
    <div className={classes.pageContainer}>
      <PageHeroComponent
        title={translate('vakansiyalar')}
        subtitle={translate('xeberler_subtitle')}
      />
      
      <div className={classes.contentWrapper}>
        <PageHeaderComponent 
          current={translate('butun_vakansiyalar') as string} 
          title={translate('vakansiyalar_say') as string} 
          count={totalCount}
        />
        <section className={classes.listGrid} aria-label={translate('butun_vakansiyalar') as string}>
          {vacancies.map((item) => (
            <VacancyCard key={item.id} vacancy={item} />
          ))}
        </section>
      </div>
    </div>
  );
};

export default VakansiyalarComponent;