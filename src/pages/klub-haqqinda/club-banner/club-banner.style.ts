import { createUseStyles } from 'react-jss';
import { rem } from 'assets/styles/abstracts/functions';
import colors from 'assets/styles/abstracts/color';

const styles = {
  outerContainer: {
    position: 'relative',
    width: '100%',
    margin: `${rem(24)} auto`,
    paddingBottom: rem(45), 
    boxSizing: 'border-box',
  },
  bannerWrapper: {
    position: 'relative',
    width: '100%',
    height: rem(420),
    borderTopRightRadius: rem(100),
    borderBottomLeftRadius: rem(100),
    borderTopLeftRadius: rem(24),
    borderBottomRightRadius: rem(24),
    overflow: 'hidden',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    boxSizing: 'border-box',
    zIndex: 5,
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
  overlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    background: 'linear-gradient(180deg, rgba(0, 0, 0, 0.1) 0%, rgba(13, 42, 34, 0.75) 100%)',
    zIndex: 2,
  },
  content: {
    position: 'relative',
    zIndex: 6,
    textAlign: 'center',
    color: colors.white,
    padding: `0 ${rem(32)}`,
  },
  title: {
    fontSize: rem(44),
    fontWeight: 700,
    marginBottom: rem(16),
    letterSpacing: '-0.5px',
  },
  subtitle: {
    fontSize: rem(16),
    color: colors.white,
    maxWidth: rem(600),
    lineHeight: 1.6,
  },

  shadowFrame: {
    position: 'absolute',
    left: 0,
    right: 0,
    boxSizing: 'border-box',
    borderTopRightRadius: rem(100),
    borderTopLeftRadius: rem(24),
    borderBottomRightRadius: rem(24),
  },
  
  frameLayer1: {
    backgroundColor: '#1C5343',
    top: rem(15), 
    bottom: rem(30), 
    zIndex: 4,
    borderBottomLeftRadius: rem(105), 
  },
  
  frameLayer2: {
    backgroundColor: '#386B5C',
    top: rem(30),
    bottom: rem(15),
    zIndex: 3,
    borderBottomLeftRadius: rem(110),
  },
  
  frameLayer3: {
    backgroundColor: '#7FA196',
    top: rem(45),
    bottom: 0, 
    zIndex: 2,
    borderBottomLeftRadius: rem(115),
  },
};

export const useClubBannerStyles = createUseStyles(styles);