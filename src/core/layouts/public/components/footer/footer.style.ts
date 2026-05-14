import { createUseStyles } from 'react-jss';
import { rem } from 'assets/styles/abstracts/functions';
import colors from 'assets/styles/abstracts/color';

const styles = {
  footer: {
    backgroundColor: colors.shekiGreen,
    width: '100%',
    marginTop: rem(60),
  },
  inner: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: rem(24),
    padding: `${rem(40)} ${rem(30)}`,
  },
  logoWrap: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: rem(8),
  },
  logo: {
    width: rem(48),
    height: rem(48),
  },
  logoText: {
    color: colors.white,
    fontSize: rem(16),
    fontWeight: 600,
  },
  links: {
    userSelect: 'none',
    display: 'flex',
    alignItems: 'center',
    gap: rem(32),
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
  link: {
    color: `${colors.white}`,
    textDecoration: 'none',
    fontSize: rem(15),
    '&:hover': {
      color: `${colors.white} !important`,
      opacity: 0.8,
    },
  },
  divider: {
    width: '100%',
    height: '1px',
    backgroundColor: 'rgba(255,255,255,0.2)',
  },
  socials: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: rem(24),
  },
  socialLink: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    '& img': {
      width: rem(28),
      height: rem(28),
      filter: 'brightness(0) invert(1)',
    },
    '&:hover': {
      opacity: 0.8,
    },
  },
};

export const useFooterStyles = createUseStyles(styles);
