import { createUseStyles } from 'react-jss';
import { rem } from 'assets/styles/abstracts/functions';
const styles = {
  grid: {
    display: 'flex',
    flexDirection: 'column',
    gap: rem(24),
    alignItems: 'center',
    width: '100%',
  },
};

export const useNailiyyetlerStyles = createUseStyles(styles);
