import { createUseStyles } from 'react-jss';
import { rem } from 'assets/styles/abstracts/functions';
import colors from 'assets/styles/abstracts/color';

export const useHomeMatchesStyles = createUseStyles({
  section: {
    padding: `${rem(60)} ${rem(0)}`,
    backgroundColor: '#FAFAFA', 
  },
  container: {
    padding: `0 ${rem(24)}`,
  },
  header: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: rem(32),
  },
  titleWrapper: {
    display: 'flex',
    flexDirection: 'column',
    gap: rem(4),
  },
  title: {
    fontSize: rem(28),
    fontWeight: 700,
    color: colors.shekiGreenDark,
    margin: 0,
  },
  subtitle: {
    fontSize: rem(14),
    color: '#7A7A7A',
    margin: 0,
  },
  viewAllLink: {
    display: 'flex',
    alignItems: 'center',
    gap: rem(8),
    fontSize: rem(16),
    fontWeight: 600,
    color: colors.shekiGreenDark,
    textDecoration: 'none',
    cursor: 'pointer',
    '&:hover': {
      textDecoration: 'underline',
    },
  },
  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
    gap: rem(24),
    '@media (max-width: 992px)': {
      gridTemplateColumns: 'repeat(2, 1fr)',
    },
    '@media (max-width: 768px)': {
      gridTemplateColumns: '1fr',
    },
  },
});