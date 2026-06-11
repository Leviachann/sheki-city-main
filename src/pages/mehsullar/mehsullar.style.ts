import { createUseStyles } from 'react-jss';
import { rem } from 'assets/styles/abstracts/functions';

const styles = {
  wrapper: {
    minHeight: '100vh',
    width: '100%',
  },
  container: {
    padding: `${rem(60)} ${rem(0)}`,
    display:'flex',
    justifyContent:'center',

  },
  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
    gap: rem(40),
    justifyContent: 'center',
    width: '100%',
  },
};

export const useMehsullarStyles = createUseStyles(styles);
