import { createUseStyles } from 'react-jss';
import { rem } from 'assets/styles/abstracts/functions';
import colors from 'assets/styles/abstracts/color';
import { sectionHeaderStyles } from '../home.style';

export const useHomeProductsStyles = createUseStyles({
  ...sectionHeaderStyles,
  section: {
    padding: `${rem(60)} ${rem(0)}`,
    backgroundColor: '#FAFAFA', 
    boxSizing: 'border-box',
  },
  container: {
    margin: '0 auto',
    padding: `0 ${rem(24)}`,
  },
  header: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: rem(24),
  },
  titleWrapper: {
    display: 'flex',
    flexDirection: 'column',
    gap: rem(4),
  },

  viewAllLink: {
    display: 'flex',
    alignItems: 'center',
    gap: rem(8),
    fontSize: rem(16),
    fontWeight: 600,
    color: colors.shekiGreenDark || '#004D40',
    textDecoration: 'none',
    cursor: 'pointer',
    '&:hover': {
      textDecoration: 'underline',
    },
  },
  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
    gap: rem(32),
    paddingTop: rem(40), 
    '@media (max-width: 992px)': {
      gridTemplateColumns: 'repeat(2, 1fr)',
    },
    '@media (max-width: 576px)': {
      gridTemplateColumns: '1fr',
    },
  },
});