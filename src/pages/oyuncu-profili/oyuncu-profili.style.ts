import { createUseStyles } from 'react-jss';
import { rem } from 'assets/styles/abstracts/functions';

const styles = {
  playersGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(4, 1fr)',
    gap: rem(24),
    width: '100%',
    padding: `${rem(32)} 0`,
    boxSizing: 'border-box',

    '@media (max-width: 1200px)': {
      gridTemplateColumns: 'repeat(3, 1fr)',
    },
    '@media (max-width: 992px)': {
      gridTemplateColumns: 'repeat(2, 1fr)',
      gap: rem(16),
    },
    '@media (max-width: 576px)': {
      gridTemplateColumns: 'repeat(1, 1fr)',
    },
  },
};

export const useOyuncuProfiliStyles = createUseStyles(styles);