import { createUseStyles } from 'react-jss';
import { rem } from 'assets/styles/abstracts/functions';
import colors from 'assets/styles/abstracts/color';

const styles = {
  navbar: {
    padding: `${rem(0)} ${rem(20)}`,
    backgroundColor: colors.white,
    position: 'fixed',
    width: '100%',
    zIndex: 1000,
    borderBottom: `1px solid ${colors.shekiBorderOuterShadow}`,
    boxSizing: 'border-box',
    '@media (max-width: 768px)': {
      padding: `${rem(0)} ${rem(8)}`,
    },
  },
  logoLabel: {
    userSelect: 'none',
    color: colors.shekiGreenDark,
    fontFamily: 'Ecluid Circular Bold, sans-serif',
    padding: `${rem(0)} ${rem(16)}`,
    '@media (max-width: 768px)': {
      display: 'none',
    },
  },
  inner: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: `${rem(16)} ${rem(30)}`,
    gap: rem(16),
    width: '100%',
    boxSizing: 'border-box',
    '@media (max-width: 768px)': {
      padding: `${rem(12)} ${rem(8)}`,
      gap: rem(12),
    },
  },
  logo: {
    display: 'flex',
    alignItems: 'center',
    textDecoration: 'none',
    flexShrink: 0,
  },
  links: {
    userSelect: 'none',
    display: 'flex',
    alignItems: 'center',
    gap: rem(32),
    listStyle: 'none',
    margin: 0,
    padding: 0,
    
    '@media (max-width: 992px)': {
      flex: 1,                    
      overflowX: 'auto',         
      whiteSpace: 'nowrap',      
      gap: rem(20),
      paddingDeep: `${rem(4)} 0`,
      
      '-webkit-overflow-scrolling': 'touch', 
      
      '&::-webkit-scrollbar': {
        display: 'none',
        width: 0,
        height: 0,
      },
      scrollbarWidth: 'none',   
      '-ms-overflow-style': 'none', 
    },
    
    '& li': {
      flexShrink: 0,    
    },
    '& a': {
      color: colors.black,
      textDecoration: 'none',
      fontSize: rem(15),
      display: 'inline-block',
      '&:hover': {
        color: colors.shekiGreenDark,
      },
      '&.active': {
        color: colors.shekiGreenDark,
        fontFamily: 'Nunito Bold, sans-serif',
      },
    },
  },
  hamburger: {
    background: 'none',
    border: 'none',
    cursor: 'pointer',
    padding: rem(8),
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: colors.shekiGreen,
    flexShrink: 0,
    '& svg': {
      width: rem(24),
      height: rem(24),
    },
    '&:hover': {
      color: colors.shekiGreen,
    },
  },
};

export const useNavbarStyles = createUseStyles(styles);