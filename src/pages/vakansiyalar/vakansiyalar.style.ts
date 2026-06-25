import colors from 'assets/styles/abstracts/color';
import { createUseStyles } from 'react-jss';

export const useVakansiyalarStyles = createUseStyles({
  pageContainer: {
    width: '100%',
    minHeight: '100vh',
    backgroundColor: colors.white,
  },
  contentWrapper: {
    margin: '0 auto',
  },
  listGrid: {
    display: 'flex',
    flexDirection: 'column',
    marginTop: '32px',
  },
});