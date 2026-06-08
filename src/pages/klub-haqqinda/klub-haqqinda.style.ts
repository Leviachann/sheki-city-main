import { createUseStyles } from 'react-jss';
import { rem } from 'assets/styles/abstracts/functions';
import colors from 'assets/styles/abstracts/color';

const styles = {
  textContainer:{
    margin:`${rem(60)} auto`,
  },
  aboutText:{
    lineHeight:2,
    textAlign:'center',
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
  header: {
    fontSize: rem(24),
    fontFamily: 'Ecluid Circular Bold, sans-serif',
    color: colors.shekiGreyText,
  },
};

export const useKlubHaqqindaStyles = createUseStyles(styles);
