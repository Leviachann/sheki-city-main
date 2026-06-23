import { createUseStyles } from 'react-jss';
import { rem } from 'assets/styles/abstracts/functions';
import colors from 'assets/styles/abstracts/color';

export const useHomePartnersStyles = createUseStyles({
  section: {
    padding: `${rem(60)} ${rem(0)}`,
    backgroundColor: '#FFFFFF',
    boxSizing: 'border-box',
  },
  header: {
    marginBottom: rem(40),
  },
  title: {
    fontSize: rem(28),
    fontWeight: 700,
    color: colors.shekiGreenDark,
    margin: `${rem(20)} 0`,
  },
  subtitle: {
    fontSize: rem(14),
    color: '#7A7A7A',
    margin: `${rem(14)} 0`,
  },
  row: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    gap: rem(40),
    flexWrap: 'wrap',
    '@media (max-width: 768px)': {
      justifyContent: 'center',
      gap: rem(32),
    },
  },
  partnerLink: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flex: '1 1 0px',
    minWidth: rem(160),
    maxWidth: rem(220),
    height: rem(80),
    transition: 'transform 0.3s ease, filter 0.3s ease',
    filter: 'grayscale(20%) opacity(0.85)',
    '&:hover': {
      transform: 'scale(1.05)',
      filter: 'grayscale(0%) opacity(1)',
    },
  },
  logo: {
    width: '100%',
    height: '100%',
    objectFit: 'contain',
  },
});