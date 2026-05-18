import { createUseStyles } from 'react-jss';
import { rem } from 'assets/styles/abstracts/functions';
import colors from 'assets/styles/abstracts/color';

const styles = {
  wrapper: {
    minHeight: '100vh',
    width: '100%',
  },
  container: {
    margin: '0 auto',
    padding: `${rem(60)} ${rem(0)}`,
  },
  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
    gap: rem(40),
    justifyContent: 'center',
    width: '100%',
  },
  paginationContainer: {
    display: 'flex',
    justifyContent: 'center',
    marginTop: rem(40),
    paddingBottom: rem(60),
    '& .ant-pagination': {
      display: 'flex',
      alignItems: 'center',
      gap: rem(8),
    },
    '& .ant-pagination-item': {
      borderRadius: '50%',
      backgroundColor: 'transparent',
      borderColor: 'transparent',
      minWidth: rem(32),
      height: rem(32),
      lineHeight: rem(32),
      display: 'inline-flex',
      justifyContent: 'center',
      alignItems: 'center',
      '& a': {
        color: colors.white,
        transition: 'color 0.3s ease',
      },
      '&:hover': {
        borderColor: colors.shekiGreen,
        '& a': {
          color: colors.shekiGreen,
        },
      },
    },
    '& .ant-pagination-item-active': {
      backgroundColor: colors.shekiGreenDark,
      borderColor: colors.shekiGreenDark,
      '& a': {
        color: `${colors.white} !important`,
      },
      '&:hover': {
        backgroundColor: colors.shekiGreen,
        borderColor: colors.shekiGreen,
      },
    },
    '& .ant-pagination-prev, & .ant-pagination-next, & .ant-pagination-jump-prev, & .ant-pagination-jump-next': {
      '& .ant-pagination-item-link, & a': {
        color: colors.white,
        backgroundColor: 'transparent',
        borderColor: 'transparent',
        display: 'inline-flex',
        justifyContent: 'center',
        alignItems: 'center',
        '&:hover': {
          color: colors.shekiGreen,
        },
      },
    },
  },
};

export const useMehsullarStyles = createUseStyles(styles);
