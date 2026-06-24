import { useState } from 'react'; // Added useState hook
import { useParams, useLocation } from 'react-router-dom';
import useLocalization from 'assets/lang';
import PageHeroComponent from 'core/shared/page-hero/page-hero.component';
import PageHeaderComponent from 'core/shared/section-header/section-header.component';
import { Routes } from 'router/routes';
import { useGetVacancyBySlugQuery } from './actions/vakansiyalar.query';
import { useVakansiyaDetailStyles } from './vakansiya-detail.style';
import { Vacancy } from 'core/shared/vanacies-card/vacancies';
import { VacancyApplyModal } from 'core/shared/modal/VacancyApplyModal.component';

const VakansiyaDetailComponent = () => {
  const { slug } = useParams<{ slug: string }>();
  const translate = useLocalization();
  const classes = useVakansiyaDetailStyles();

  const [isModalOpen, setIsModalOpen] = useState(false); 

  const location = useLocation();
  const stateVacancy = location.state?.vacancy as Vacancy | undefined;
  const {
    data: serverVacancy,
    isLoading,
    isError,
  } = useGetVacancyBySlugQuery(slug || '', 'az');

  const vacancy = stateVacancy || serverVacancy;

  const formatDate = (dateString?: string) => {
    if (!dateString) return '—';
    const date = new Date(dateString);
    if (isNaN(date.getTime())) return dateString;

    const monthsAz = [
      'Yanvar', 'Fevral', 'Mart', 'Aprel', 'May', 'İyun',
      'İyul', 'Avqust', 'Sentyabr', 'Oktabr', 'Noyabr', 'Dekabr',
    ];
    return `${date.getDate()} ${monthsAz[date.getMonth()]} ${date.getFullYear()}`;
  };

  const parseContentToPoints = (textBlock?: string): string[] => {
    if (!textBlock) return [];
    return textBlock
      .split('.')
      .map((sentence) => sentence.trim())
      .filter((sentence) => sentence.length > 0);
  };

  if (isLoading && !vacancy) {
    return <div className={classes.pageContainer} />;
  }

  if ((isError && !vacancy) || !vacancy) {
    return (
      <div className={classes.pageContainer}>
        <div className={classes.contentWrapper}>
          <p>{translate('input_required')}</p>
        </div>
      </div>
    );
  }

  const breadcrumbs = [
    { label: translate('ana_sehife') as string, path: Routes.home },
    { label: translate('vakansiyalar') as string, path: Routes.vakansiyalar },
    { label: vacancy.title },
  ];

  const descriptionPoints = parseContentToPoints(vacancy.description);
  const requirementPoints = parseContentToPoints(vacancy.requirements);

  return (
    <div className={classes.pageContainer}>
      <PageHeroComponent
        title={vacancy.title}
        subtitle={`${translate('muraciet_son_tarix')} : ${formatDate(vacancy.applicationEnd)}`}
      />

      <div className={classes.contentWrapper}>
        <PageHeaderComponent breadcrumbs={breadcrumbs} />

        <main>
          <h2 className={classes.titleHeader}>
            {translate('vakansiya_detallari')}
          </h2>

          <section className={classes.descriptionSection}>
            {(descriptionPoints.length > 0 || requirementPoints.length > 0) ? (
              <ul>
                {descriptionPoints.map((sentence, idx) => (
                  <li key={`desc-${idx}`}>{sentence}.</li>
                ))}
                
                {requirementPoints.map((sentence, idx) => (
                  <li key={`req-${idx}`}>{sentence}.</li>
                ))}
              </ul>
            ) : (
              <p>—</p>
            )}
          </section>

          <footer className={classes.footerRow}>
            <div className={classes.datesContainer}>
              <p className={classes.dateText}>
                {translate('baslama_tarixi') }
                <span>{formatDate(vacancy.applicationStart)}</span>
              </p>
              <p className={classes.dateText}>
                {translate('bitme_tarixi')} 
                <span>{formatDate(vacancy.applicationEnd)}</span>
              </p>
            </div>
            <button 
              type='button' 
              className={classes.actionButton}
              onClick={() => setIsModalOpen(true)}
            >
              {translate('muraciet_et')}
            </button>
          </footer>
        </main>
      </div>
      <VacancyApplyModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
        vacancyId={vacancy.id} 
      />
    </div>
  );
};

export default VakansiyaDetailComponent;