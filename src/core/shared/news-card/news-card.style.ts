import { createUseStyles } from 'react-jss';
import { rem } from 'assets/styles/abstracts/functions';
import colors from 'assets/styles/abstracts/color';

const styles = {
  card: {
    backgroundColor: colors.white,
    borderRadius: rem(40),
    padding: rem(24),
    width: '100%',
    maxWidth: rem(600),
    boxShadow: `0px 10px 30px ${colors.shekiBorderOuterShadow}`,
    display: 'flex',
    flexDirection: 'column',
    gap: rem(16),
    transition: 'transform 0.2s ease-in-out',
    '&:hover': {
      transform: 'translateY(-5px)',
    },
  },
  imageWrapper: {
    width: '100%',
    height: rem(240),
    borderRadius: rem(24),
    overflow: 'hidden',
  },
  image: {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
  },
  title: {
    fontSize: rem(18),
    color: colors.shekiGreenDark,
    fontFamily: 'Ecluid Circular Bold, sans-serif',
  },
  description: {
    fontSize: rem(14),
    color: colors.shekiGreyText,
    lineHeight: 1.5,
  },
  footer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 'auto',
    paddingTop: rem(8),
  },
  dateBox: {
    display: 'flex',
    alignItems: 'center',
    gap: rem(8),
    color: colors.shekiGreyText,
    fontSize: rem(14),
  },
  moreLink: {
    display: 'flex',
    alignItems: 'center',
    gap: rem(6),
    textDecoration: 'none',
    color: colors.shekiGreenDark,
    fontFamily: 'Ecluid Circular Bold, sans-serif',
    fontSize: rem(15),
    cursor: 'pointer',
  },
};

export const useNewsCardStyles = createUseStyles(styles);
