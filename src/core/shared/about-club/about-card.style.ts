import { createUseStyles } from 'react-jss';
import { rem } from 'assets/styles/abstracts/functions';
import colors from 'assets/styles/abstracts/color';

const styles = {
  cardWrapper: {
    position: 'relative',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-end',
    width: '100%',
    height: rem(360),
    borderRadius: rem(40), 
    overflow: 'hidden',
  },
  bgImage: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    zIndex: 1,
  },
  gradientOverlay: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    width: '100%',
    height: '70%',
    background: 'linear-gradient(to top, rgba(13, 42, 34, 0.95) 10%, rgba(13, 42, 34, 0.6) 50%, rgba(0, 0, 0, 0) 100%)',
    zIndex: 2,
  },
  content: {
    position: 'relative',
    zIndex: 3,
    padding: rem(32),
    display: 'flex',
    flexDirection: 'column',
    gap: rem(12),
  },
  title: {
    fontSize: rem(22),
    fontWeight: 700,
    color: colors.white,
  },
  description: {
    fontSize: rem(14),
    lineHeight: 1.5,
    color: colors.shekiPaleGreen,
    maxWidth: '90%',
  },
  linkText: {
    display: 'flex',
    alignItems: 'center',
    gap: rem(8),
    fontSize: rem(14),
    fontWeight: 600,
    color: colors.white,
    marginTop: rem(12),
  },
  arrowIcon: {
    width: rem(12),
    height: rem(12),
  },
};

export const useAboutCardStyles = createUseStyles(styles);