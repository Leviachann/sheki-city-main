import { createUseStyles } from 'react-jss';
import { rem } from 'assets/styles/abstracts/functions';

const styles = {
  textContainer:{
    margin:`${rem(80)} auto`,
  },
  aboutText:{
    
  },
  gridContainer: {
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 11fr)',
    gap: rem(24),
    width: '100%',
    margin: `${rem(40)} auto`,
    padding: `0 ${rem(16)}`,
    boxSizing: 'border-box',
    '@media (max-width: 992px)': {
      gridTemplateColumns: 'repeat(2, 1fr)',
    },
    '@media (max-width: 600px)': {
      gridTemplateColumns: '1fr',
    },
  },
};

export const useKlubHaqqindaStyles = createUseStyles(styles);
