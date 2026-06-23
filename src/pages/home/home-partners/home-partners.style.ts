import { createUseStyles } from 'react-jss';
import { rem } from 'assets/styles/abstracts/functions';
import { sectionHeaderStyles } from '../home.style';

export const useHomePartnersStyles = createUseStyles({
  ...sectionHeaderStyles,
  section: {
    padding: `${rem(60)} ${rem(0)}`,
    backgroundColor: '#FFFFFF',
    boxSizing: 'border-box',
  },
  header: {
    marginBottom: rem(40),
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