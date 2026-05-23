import { createUseStyles } from 'react-jss';
import { rem } from 'assets/styles/abstracts/functions';

const styles = {
  container: {
    margin: '0 auto',
    padding: `${rem(60)} ${rem(0)}`,
  },
  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
    gap: rem(60),
    justifyContent: 'center',
    width: '100%',
  },
  statusMessage: {
    color: '#ffffff',
    textAlign: 'center',
    gridColumn: '1 / -1',
    fontSize: rem(16),
  },
  paginationContainer: {
    display: 'flex',
    justifyContent: 'center',
    marginTop: rem(40),
    width: '100%',
  },
};

export const useXeberlerStyles = createUseStyles(styles);