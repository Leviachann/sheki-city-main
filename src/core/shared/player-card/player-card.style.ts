import { createUseStyles } from 'react-jss';
import { rem } from 'assets/styles/abstracts/functions';
import colors from 'assets/styles/abstracts/color';

const styles = {
  card: {
    backgroundColor: ({ variant }: { variant: 'light' | 'dark' }) =>
      variant === 'dark' ? colors.shekiGreenDark : colors.white,
    borderRadius: rem(32),
    padding: rem(24),
    display: 'flex',
    flexDirection: 'column',
    position: 'relative',
    overflow: 'hidden',
    boxShadow: ({ variant }: { variant: 'light' | 'dark' }) =>
      variant === 'dark' ? 'none' : `0px 10px 30px ${colors.shekiBorderOuterShadow}`,
    transition: 'transform 0.2s ease-in-out',
    '&:hover': {
      transform: 'translateY(-5px)',
    },
  },
  numberContainer: {
    position: 'absolute',
    top: rem(24),
    left: rem(24),
    zIndex: 2,
  },
  jerseyNumber: {
    fontSize: rem(36),
    fontWeight: 800,
    fontFamily: 'Euclid Circular Bold, sans-serif',
    color: ({ variant }: { variant: 'light' | 'dark' }) =>
      variant === 'dark' ? colors.white : colors.shekiGreenDark,
    opacity: ({ variant }: { variant: 'light' | 'dark' }) =>
      variant === 'dark' ? 0.3 : 0.15,
  },
imageWrapper: {
    width: '100%',
    height: rem(280),
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'flex-end',
    marginBottom: rem(16),
  },
  image: {
    height: '100%',
    width: '100%',
    objectFit: 'contain', 
    display: 'block',
  },
  infoSection: {
    display: 'flex',
    flexDirection: 'column',
    gap: rem(4),
  },
  name: {
    fontSize: rem(20),
    fontWeight: 700,
    fontFamily: 'Euclid Circular Bold, sans-serif',
    color: ({ variant }: { variant: 'light' | 'dark' }) =>
      variant === 'dark' ? colors.white : colors.shekiGreenDark,
  },
  position: {
    fontSize: rem(14),
    color: ({ variant }: { variant: 'light' | 'dark' }) =>
      variant === 'dark' ? colors.shekiGreenLight : colors.shekiGreyText,
  },
};

export const usePlayerCardStyles = createUseStyles(styles);