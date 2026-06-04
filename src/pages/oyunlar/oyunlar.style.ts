import { createUseStyles } from 'react-jss';
import { rem } from 'assets/styles/abstracts/functions';
import colors from 'assets/styles/abstracts/color';

const styles = {
  container: {
    backgroundColor: colors.white,
    borderRadius: rem(30),
    border: '1px solid #EAEAEA',
    padding: rem(40),
    margin: `${rem(40)} auto`,
    width: '100%',
    boxSizing: 'border-box',
  },
  sectionTitle: {
    fontSize: rem(22),
    fontWeight: 700,
    color: colors.shekiGreyText,
    marginBottom: rem(24),
  },
  grid: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: rem(16), 
  },
  paginationContainer: {
    display: 'flex',
    justifyContent: 'flex-end', 
    marginTop: rem(32),
    width: '100%',
  },
};

export const useOyunlarStyles = createUseStyles(styles);