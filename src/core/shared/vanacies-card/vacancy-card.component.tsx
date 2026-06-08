import { useNavigate } from 'react-router-dom';
import { Routes, goTo } from 'router/routes';
import { useVacancyCardStyles } from './vacancy-card.style';
import { Vacancy } from './vacancies';
import { ArrowOut, CalendarIcon } from 'assets/images/icons/arrows';

export interface VacancyCardProps {
  vacancy: Vacancy;
}

const VacancyCard = ({ vacancy }: VacancyCardProps) => {
  const classes = useVacancyCardStyles();
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate(goTo(Routes.vakansiyaDetail, vacancy.slug));
  };

  const formatDate = (dateString: string) => {
    if (!dateString) return '—';
    const date = new Date(dateString);
    if (isNaN(date.getTime())) return dateString;

    const monthsAz = [
      'Yanvar', 'Fevral', 'Mart', 'Aprel', 'May', 'İyun',
      'İyul', 'Avqust', 'Sentyabr', 'Oktabr', 'Noyabr', 'Dekabr'
    ];
    
    return `${date.getDate()} ${monthsAz[date.getMonth()]} ${date.getFullYear()}`;
  };

  return (
    <article className={classes.card} onClick={handleNavigate}>
      <div className={classes.contentWrapper}>
        <h3 className={classes.title}>{vacancy.title}</h3>
        
        <div className={classes.dateContainer}>
          <span className={classes.calendarIcon}>
            <CalendarIcon />
          </span>
          <time dateTime={vacancy.applicationStart}>
            {formatDate(vacancy.applicationStart)}
          </time>
        </div>
      </div>

      <div className={classes.arrowContainer}>
        <ArrowOut />
      </div>
    </article>
  );
};

export default VacancyCard;