import { createUseStyles } from 'react-jss';

export const useVakansiyalarStyles = createUseStyles({
  pageContainer: {
    width: '100%',
    minHeight: '100vh',
    backgroundColor: '#fafbfc',
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