import { createUseStyles } from 'react-jss';
import { rem } from 'assets/styles/abstracts/functions';
import colors from 'assets/styles/abstracts/color';

const styles = {
  header: {
    fontSize: rem(35),
    fontFamily: 'Ecluid Circular Bold, sans-serif',
    color: colors.shekiGreyText,
  },
  coverImage: {
    width: '100%',
    borderRadius: rem(12),
    margin: `${rem(25)} ${rem(0)}`,
  },
  mainContainer:{
    margin: `${rem(44)} ${rem(0)}`,
  },
  content:{
    
    fontSize: rem(20),
    lineHeight: 1.5,
    fontFamily: 'Ecluid Circular Light',
  }
};

export const useKlubTarixiStyles = createUseStyles(styles);
