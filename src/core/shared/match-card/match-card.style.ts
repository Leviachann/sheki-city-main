import { createUseStyles } from 'react-jss';
import { rem } from 'assets/styles/abstracts/functions';
import colors from 'assets/styles/abstracts/color';

const styles = {
  card: {
    backgroundColor: colors.white,
    borderRadius: rem(100),
    padding: `${rem(16)} ${rem(32)}`,
    width: '100%',
    border: `1px solid ${colors.shekiGreenLight}`,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  leagueWrapper: {
    width: rem(90),
    height: rem(40),
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
    gap: rem(24),
  },

  homeTeam: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end',
    flex: 1,
    gap: rem(16),
  },

  awayTeam: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    flex: 1,
    gap: rem(16),
  },
  clubName: {
    fontSize: rem(18),
    fontWeight: 700,
    color: colors.shekiGreenDark, 
  },
  teamLogoWrapper: {
    width: rem(66),
    height: rem(66),
    display: 'flex',
  },

  scoreColumn: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    minWidth: rem(100),
  },
  matchDate: {
    fontSize: rem(13),
    color: colors.shekiGreenDark,
    marginBottom: rem(4),
  },
  scoreBox: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: rem(4),
  },
  scoreText: {
    fontSize: rem(16),
    fontWeight: 800,
    color: colors.shekiGreenDark,
  },

  moreLink: {
    width: rem(40),
    height: rem(40),
    borderRadius: '50%',
    backgroundColor: colors.shekiGreenLight, 
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    cursor: 'pointer',
    '& svg': {
      width: rem(16),
      height: rem(16),
    },
  },
};

export const useMatchCardStyles = createUseStyles(styles);