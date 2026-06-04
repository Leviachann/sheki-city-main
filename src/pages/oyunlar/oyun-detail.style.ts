import { createUseStyles } from 'react-jss';
import { rem } from 'assets/styles/abstracts/functions';
import colors from 'assets/styles/abstracts/color';

const styles = {
  pageWrapper: {
    width: '100%',
    margin: `${rem(24)} auto`,
    padding: `0 ${rem(16)}`,
  },
  detailCard: {
    backgroundColor: colors.white,
    borderRadius: rem(24),
    padding: `${rem(48)} ${rem(64)}`,
    marginTop: rem(24),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    width: '100%',
  },
  leagueHeader: {
    width: rem(120),
    height: rem(60),
    marginBottom: rem(32),
  },
  leagueLogo: {
    width: '100%',
    height: '100%',
    objectFit: 'contain',
  },
  scoreboardRow: {
    display: 'flex',
    flexDirection: 'row',
    width: '100%',
    maxWidth: rem(700),
    gap: rem(40),
  },
  teamContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
    textAlign: 'center',
  },
  logoWrapper: {
    width: rem(110),
    height: rem(110),
    marginBottom: rem(16),
  },
  teamLogo: {
    height: '100%',
    objectFit: 'contain',
  },
  teamName: {
    fontSize: rem(22),
    fontWeight: 500,
    color: colors.shekiGreenDark,
  },
  centerInfoStack: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    minWidth: rem(160),
    paddingTop: rem(20),
  },
  scoreText: {
    fontSize: rem(28),
    fontWeight: 700,
    color: colors.shekiGreyText,
    lineHeight: 1,
  },
  dateText: {
    fontSize: rem(18),
    fontWeight: 400,
    color: colors.shekiGreyText,
    marginTop: rem(12),
    marginBottom: rem(16),
  },
  vsText: {
    fontSize: rem(14),
    color: colors.shekiGreyText,
    margin: 0,
  },
};

export const useOyunDetailStyles = createUseStyles(styles);