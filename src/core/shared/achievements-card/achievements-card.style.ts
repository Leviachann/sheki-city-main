import { createUseStyles } from 'react-jss';
import { rem } from 'assets/styles/abstracts/functions';
import colors from 'assets/styles/abstracts/color';

const styles = {
  card: {
    backgroundColor: colors.white,
    borderRadius: rem(40),
    padding: `${rem(24)} ${rem(40)}`,
    margin: `${rem(24)} ${rem(0)}`,
    width: '100%',
    borderWidth: '2px', 
    borderStyle: 'solid', 
    borderColor: colors.shekiBorderOuterShadow,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    gap: rem(24),
  },
  imageWrapper: {
    width: rem(60),
    height: rem(100),
  },
  image: {
    width: '100%',
    height: '100%',
    objectFit: 'contain', 
  },
  contentWrapper: {
    display: 'flex',
    flexDirection: 'column',
    gap: rem(8),
    flexGrow: 1, 
  },
  title: {
    fontSize: rem(24),
    fontWeight: 700,
    color: colors.shekiGreenDark,
    fontFamily: 'Ecluid Circular Bold, sans-serif',
  },
  date: {
    fontSize: rem(16),
    color: colors.shekiGreyText,
    fontWeight: 400,
  },
  count: {
    fontSize: rem(64),
    color: colors.shekiGreenDark, 
    fontFamily: 'Ecluid Circular Bold, sans-serif',
  },
};

export const useAchievementsCardStyles = createUseStyles(styles);