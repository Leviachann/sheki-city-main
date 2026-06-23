import { createUseStyles } from 'react-jss';
import { rem } from 'assets/styles/abstracts/functions';
import colors from 'assets/styles/abstracts/color';

const styles = {
  container: {
    width: '100%',
    margin: '0 auto',
    padding: `${rem(40)} ${rem(20)}`,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    boxSizing: 'border-box',
    '@media (max-width: 768px)': {
      padding: `${rem(24)} ${rem(12)}`,
    },
  },
  list: {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    gap: rem(15),
  },
  card: {
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    padding: `${rem(20)} ${rem(30)}`,
    backgroundColor: colors.white,
    borderRadius: rem(30),
    border: `${rem(1)} solid ${colors.border}`,
    cursor: 'pointer',
    boxSizing: 'border-box',
    transition: 'all 0.2s ease-in-out',
    '&:hover': {
      borderColor: colors.shekiGreenDark,
      boxShadow: '0 4px 12px rgba(0,0,0,0.05)',
    },
    
    '@media (max-width: 576px)': {
      padding: `${rem(16)} ${rem(20)}`,
      gap: rem(12),
    },
  },
  iconContainer: {
    width: rem(64),
    height: rem(64),
    borderRadius: '50%',
    backgroundColor: colors.shekiPaleGreen,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: rem(24),
    flexShrink: 0,
    '& svg': {
      width: rem(32),
      height: rem(32),
      fill: colors.shekiGreenDark,
    },
    '& img': {
      width: rem(32),
      height: rem(32),
      objectFit: 'contain',
    },
    
    '@media (max-width: 576px)': {
      width: rem(48),
      height: rem(48),
      marginRight: rem(12),
      '& svg, & img': {
        width: rem(24),
        height: rem(24),
      },
    },
  },
  textContainer: {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    minWidth: 0,
  },
  cardTitle: {
    color: colors.shekiGreyText,
    fontSize: rem(18),
    fontFamily: 'Ecluid Circular Bold, sans-serif',
    marginBottom: rem(6),
    '@media (max-width: 576px)': {
      fontSize: rem(16),
      marginBottom: rem(4),
    },
  },
  cardDesc: {
    color: colors.shekiGreyText,
    fontSize: rem(14),
    lineHeight: 1.4,
    '@media (max-width: 576px)': {
      fontSize: rem(13),
    },
  },
};

export const useForumStyles = createUseStyles(styles);