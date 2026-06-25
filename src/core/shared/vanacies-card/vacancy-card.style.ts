import { createUseStyles } from 'react-jss';
import colors from 'assets/styles/abstracts/color';

export const useVacancyCardStyles = createUseStyles({
  card: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: colors.white,
    border: `1px solid ${colors.shekiBorder}`,
    borderRadius: '40px', 
    padding: '24px 40px',
    marginBottom: '20px',
    cursor: 'pointer',
    transition: 'all 0.2s ease-in-out',
    '&:hover': {
      borderColor: colors.shekiGreenBright,
      transform: 'translateY(-2px)',
      boxShadow: '0 4px 12px rgba(17, 85, 68, 0.05)',
    },
  },
  contentWrapper: {
    display: 'flex',
    flexDirection: 'column',
    gap: '12px',
  },
  title: {
    fontSize: '20px',
    fontWeight: 700,
    color: '#1c2421',
    margin: 0,
    fontFamily: 'inherit',
  },
  dateContainer: {
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
    color: '#63736e',
    fontSize: '14px',
    fontWeight: 500,
  },
  calendarIcon: {
    width: '18px',
    height: '18px',
    color: colors.shekiGreenBright,
  },
  arrowContainer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '44px',
    height: '44px',
    borderRadius: '50%',
    backgroundColor: '#f0f4f3',
    color: colors.shekiGreenBright,
    transition: 'background-color 0.2s, color 0.2s',
  },
  arrowIcon: {
    width: '20px',
    height: '20px',
  },
});