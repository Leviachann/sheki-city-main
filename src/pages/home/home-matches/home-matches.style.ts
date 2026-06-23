import { createUseStyles } from 'react-jss';
import { rem } from 'assets/styles/abstracts/functions';
import colors from 'assets/styles/abstracts/color';
import { sectionHeaderStyles } from '../home.style';

export const useHomeMatchesStyles = createUseStyles({
  ...sectionHeaderStyles,
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