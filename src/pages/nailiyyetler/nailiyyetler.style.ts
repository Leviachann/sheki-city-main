import { createUseStyles } from 'react-jss';
import { rem } from 'assets/styles/abstracts/functions';
import colors from 'assets/styles/abstracts/color';
const styles = {
  grid: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: rem(24),
    width: '100%',
  },
  emptyCard: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    margin: `${rem(40)} auto`,
    padding: `${rem(80)} ${rem(0)}`,
    backgroundColor: colors.white,
    borderRadius: rem(40),
    borderWidth: '2px', 
    borderStyle: 'solid', 
    borderColor: colors.shekiBorderOuterShadow,
    gap: rem(16),
  },
  iconWrapper: {
    '& svg': {
      width: rem(80),
      height: rem(80),
    },
  },
  emptyText: {
    fontSize: rem(20),
    color: colors.shekiGreenDark,
  },
};

export const useNailiyyetlerStyles = createUseStyles(styles);
