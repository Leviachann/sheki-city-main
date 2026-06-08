import { createUseStyles } from 'react-jss';
import { rem } from 'assets/styles/abstracts/functions';
import colors from 'assets/styles/abstracts/color';

const styles = {
  mainTitle: {
    fontSize: rem(36),
    fontWeight: 700,
  },
  newsHeader: {
    display: 'flex',
    padding: `${rem(44)} ${rem(0)}`,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  coverImage: {
    width: '100%',
    borderRadius: rem(12),
    marginBottom: rem(32),
  },
  body: {
    fontSize: rem(24),
    lineHeight: 1.7,
    color: colors.shekiGreyText,
    '& p': {
      marginBottom: rem(16),
    },
    '& h2': {
      marginTop: rem(32),
      marginBottom: rem(16),
    },
  },
  otherNews: {
    marginTop: rem(64),
  },
  sectionTitle: {
    fontSize: rem(24),
    fontWeight: 700,
  },
  newsGrid: {
    margin: `${rem(44)} ${rem(0)}`,
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
    gap: rem(60),
    justifyContent: 'center',
    width: '100%',
    overflow: 'hidden',
    maxHeight: '450px',
    gridTemplateRows: 'auto',
    gridAutoRows: 'auto',
  },

  date: {
    fontSize: rem(28),
    color: colors.shekiGreenDark,
  },
};

export const useXeberDetailStyles = createUseStyles(styles);
