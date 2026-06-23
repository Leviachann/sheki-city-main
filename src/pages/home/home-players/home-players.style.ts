import { createUseStyles } from 'react-jss';
import { rem } from 'assets/styles/abstracts/functions';
import colors from 'assets/styles/abstracts/color';

export const useHomePlayersStyles = createUseStyles({
    noPlayersMessage: {
    gridColumn: '1 / -1',
    textAlign: 'center',
    padding: `${rem(48)} ${rem(0)}`,
    color: 'rgba(255, 255, 255, 0.6)',
    fontSize: rem(16),
    fontWeight: 500,
    fontStyle: 'italic',
    letterSpacing: rem(0.5),
  },
  section: {
    background: 'linear-gradient(180deg, #00503E 0%, #00362A 100%)',
    padding: `${rem(64)} ${rem(0)}`,
    borderRadius: rem(40), 
    margin: `${rem(40)} ${rem(24)}`,
    boxSizing: 'border-box',
    '@media (max-width: 768px)': {
      margin: `${rem(20)} ${rem(12)}`,
      padding: `${rem(40)} ${rem(0)}`,
    },
  },
  container: {
    maxWidth: rem(1300),
    margin: '0 auto',
    padding: `0 ${rem(24)}`,
  },
  header: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexWrap: 'wrap',
    gap: rem(24),
    marginBottom: rem(40),
  },
  titleWrapper: {
    display: 'flex',
    flexDirection: 'column',
    gap: rem(4),
  },
  title: {
    fontSize: rem(28),
    fontWeight: 700,
    color: colors.white,
  },
  subtitle: {
    fontSize: rem(14),
    color: 'rgba(255, 255, 255, 0.7)',
  },
  viewAllLink: {
    display: 'flex',
    alignItems: 'center',
    gap: rem(8),
    fontSize: rem(16),
    fontWeight: 600,
    color: colors.white,
    textDecoration: 'none',
    cursor: 'pointer',
    '&:hover': {
      textDecoration: 'underline',
    },
  },
  filterContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    gap: rem(12),
    marginBottom: rem(40),
    flexWrap: 'wrap',
  },
  pillButton: {
    background: 'transparent',
    border: '1px solid rgba(255, 255, 255, 0.2)',
    borderRadius: rem(100),
    padding: `${rem(10)} ${rem(24)}`,
    color: 'rgba(255, 255, 255, 0.8)',
    fontSize: rem(16),
    fontWeight: 500,
    cursor: 'pointer',
    transition: 'all 0.2s ease-in-out',
    '&:hover': {
      borderColor: colors.white,
      color: colors.white,
    },
  },
  activePillButton: {
    background: colors.white,
    border: `1px solid ${colors.white}`,
    color: '#00503E',
    fontWeight: 600,
  },
  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
    gap: rem(32),
    '@media (max-width: 992px)': {
      gridTemplateColumns: 'repeat(2, 1fr)',
      gap: rem(20),
    },
    '@media (max-width: 576px)': {
      gridTemplateColumns: '1fr',
    },
  },
  homepageCardOverride: {
    width: '100%',
    '& > div': {
      backgroundColor: 'rgba(255, 255, 255, 0.06) !important',
      border: '1px solid rgba(255, 255, 255, 0.1)',
      boxShadow: 'none !important',
      textAlign: 'center',
      padding: `${rem(24)} !important`,
      borderRadius: rem(32),
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',
      height: '100%',
    },
    '& img': {
      backgroundColor: 'transparent !important',
    },
    
    '& h3': {
      color: '#ffffff !important',
      fontSize: rem(18),
      marginTop: rem(12),
    },
    '& p': {
      display: 'none !important', 
    },
    '& div[class*="numberContainer"]': {
      left: 'auto !important',
      right: rem(16),
      top: rem(16),
      backgroundColor: '#ffffff',
      borderRadius: '50%',
      width: rem(44),
      height: rem(44),
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    },
    '& span[class*="jerseyNumber"]': {
      color: '#00503E !important',
      opacity: '1 !important',
      fontSize: rem(18),
      fontWeight: '700',
    }
  },
});