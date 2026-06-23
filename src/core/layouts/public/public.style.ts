import { createUseStyles } from 'react-jss';
import { rem } from 'assets/styles/abstracts/functions';
import { transition } from 'assets/styles/abstracts/mixins';
import colors from 'assets/styles/abstracts/color';

const styles = {
  '@global': {
    'html, body': {
      scrollBehavior: 'smooth', 
    },
    '::-webkit-scrollbar': {
      width: rem(8),
      height: rem(8),
    },
    '::-webkit-scrollbar-track': {
      background: colors.shekiPageBg || '#F8F9FA',
    },
    '::-webkit-scrollbar-thumb': {
      backgroundColor: colors.shekiGreenDark,
      borderRadius: rem(10),
      border: `2px solid ${colors.shekiPageBg}`,
    },
    '::-webkit-scrollbar-thumb:hover': {
      backgroundColor: '#003322',
    },
  },

  public: {
    minHeight: '100vh',
    backgroundColor: colors.shekiPageBg,
    display: 'flex',
    flexDirection: 'column',
  },
  content: {
    flex: 1,
    paddingTop: rem(100),
    paddingLeft: rem(50),
    paddingRight: rem(50),
    transition: transition(),
    width: '100%',
    boxSizing: 'border-box',
  },
  shifted: {},
};

export const usePublicLayoutStyles = createUseStyles(styles);