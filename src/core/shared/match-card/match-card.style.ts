import { createUseStyles } from 'react-jss';
import { rem } from 'assets/styles/abstracts/functions';
import colors from 'assets/styles/abstracts/color';

interface StyleProps {
  variant: 'horizontal' | 'compact';
}

const styles = {
  card: {
    backgroundColor: colors.white,
    borderRadius: ({ variant }: StyleProps) => variant === 'compact' ? rem(24) : rem(100),
    padding: ({ variant }: StyleProps) => variant === 'compact' ? rem(24) : `${rem(16)} ${rem(32)}`,
    width: '100%',
    boxSizing: 'border-box',
    border: `1px solid ${colors.shekiGreenLight}`,
    display: 'flex',
    flexDirection: ({ variant }: StyleProps) => variant === 'compact' ? 'column' : 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: ({ variant }: StyleProps) => variant === 'compact' ? rem(20) : '0',
    cursor: ({ variant }: StyleProps) => variant === 'compact' ? 'pointer' : 'default',
    boxShadow: ({ variant }: StyleProps) => variant === 'compact' ? '0px 4px 15px rgba(0, 0, 0, 0.02)' : 'none',
  },

  leagueWrapper: {
    width: rem(90),
    height: rem(40),
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },

  image: {
    width: '100%',
    height: '100%',
    objectFit: 'contain',
  },

  contentWrapper: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    flexGrow: 1,
    width: '100%',
    gap: ({ variant }: StyleProps) => variant === 'compact' ? rem(8) : rem(24),
  },

  homeTeam: {
    display: 'flex',
    flexDirection: ({ variant }: StyleProps) => variant === 'compact' ? 'column' : 'row',
    alignItems: 'center',
    justifyContent: ({ variant }: StyleProps) => variant === 'compact' ? 'center' : 'flex-end',
    flex: 1,
    gap: rem(12),
    textAlign: 'center',
  },

  awayTeam: {
    display: 'flex',
    flexDirection: ({ variant }: StyleProps) => variant === 'compact' ? 'column' : 'row',
    alignItems: 'center',
    justifyContent: ({ variant }: StyleProps) => variant === 'compact' ? 'center' : 'flex-start',
    flex: 1,
    gap: rem(12),
    textAlign: 'center',
  },

  clubName: {
    fontSize: ({ variant }: StyleProps) => variant === 'compact' ? rem(14) : rem(18),
    fontWeight: ({ variant }: StyleProps) => variant === 'compact' ? 500 : 700,
    color: colors.shekiGreenDark,
    margin: 0,
  },

  teamLogoWrapper: {
    width: ({ variant }: StyleProps) => variant === 'compact' ? rem(56) : rem(66),
    height: ({ variant }: StyleProps) => variant === 'compact' ? rem(56) : rem(66),
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },

  scoreColumn: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    minWidth: ({ variant }: StyleProps) => variant === 'compact' ? rem(70) : rem(100),
  },

  matchDate: {
    fontSize: ({ variant }: StyleProps) => variant === 'compact' ? rem(12) : rem(13),
    fontWeight: ({ variant }: StyleProps) => variant === 'compact' ? 400 : 'normal',
    color: ({ variant }: StyleProps) => variant === 'compact' ? '#7A7A7A' : colors.shekiGreenDark,
    order: ({ variant }: StyleProps) => variant === 'compact' ? 2 : 1, 
    marginBottom: rem(4),
  },

  scoreBox: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: rem(4),
    order: ({ variant }: StyleProps) => variant === 'compact' ? 1 : 2,
    marginBottom: ({ variant }: StyleProps) => variant === 'compact' ? rem(6) : 0,
  },

  scoreText: {
    fontSize: ({ variant }: StyleProps) => variant === 'compact' ? rem(18) : rem(16),
    fontWeight: 800,
    color: colors.shekiGreenDark,
  },

  vsLabel: {
    display: ({ variant }: StyleProps) => variant === 'compact' ? 'inline-block' : 'none',
    fontSize: rem(12),
    color: '#B5B5B5',
    textTransform: 'lowercase',
    order: 3,
    marginTop: rem(4),
  },

  ctaButton: {
    display: ({ variant }: StyleProps) => variant === 'compact' ? 'block' : 'none',
    width: '100%',
    backgroundColor: colors.shekiGreen,
    color: colors.white,
    border: 'none',
    borderRadius: rem(100),
    padding: `${rem(10)} ${rem(0)}`,
    fontSize: rem(14),
    fontWeight: 500,
    cursor: 'pointer',
    transition: 'background-color 0.2s ease',
    '&:hover': {
      backgroundColor: colors.shekiGreenDark,
    },
  },

  moreLink: {
    display: ({ variant }: StyleProps) => variant === 'compact' ? 'none' : 'flex',
    width: rem(40),
    height: rem(40),
    borderRadius: '50%',
    backgroundColor: colors.shekiGreenLight,
    alignItems: 'center',
    justifyContent: 'center',
    cursor: 'pointer',
    '& svg': {
      width: rem(16),
      height: rem(16),
    },
  },
};

export const useMatchCardStyles = createUseStyles<string, StyleProps>(styles);