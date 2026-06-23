import { createUseStyles } from 'react-jss';
import { rem } from 'assets/styles/abstracts/functions';
import { transition } from 'assets/styles/abstracts/mixins';
import colors from 'assets/styles/abstracts/color';

const styles = {
  backdrop: {
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100vw',
    height: '100vh',
    backgroundColor: 'rgba(0,0,0,0.4)',
    zIndex: 1001,
  },
sideMenu: {
    position: 'fixed',
    top: rem(0),
    right: rem(0),
    bottom: rem(20),
    width: rem(320),
    backgroundColor: colors.white,
    zIndex: 1002,
    padding: `${rem(32)} ${rem(24)}`,
    borderTopLeftRadius: rem(40),
    borderBottomLeftRadius: rem(40),
    transform: `translateX(calc(100% + ${rem(40)}))`,
    transition: transition(),
    display: 'flex',
    flexDirection: 'column',
    gap: rem(10),
    boxShadow: '0 10px 40px rgba(0,0,0,0.12)',
    overflowY: 'auto',
    maxHeight: '100vh',
    WebkitOverflowScrolling: 'touch', 
    '&::-webkit-scrollbar': {
      width: rem(4),
    },
    '&::-webkit-scrollbar-thumb': {
      backgroundColor: 'rgba(0, 0, 0, 0.15)',
      borderRadius: rem(4),
    },
  },
  open: {
    transform: 'translateX(0)',
  },
  menuHeader: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  menuTitle: {
    fontSize: rem(15),
    fontWeight: 700,
    color: colors.black,
  },
  closeBtn: {
    background: 'none',
    border: 'none',
    cursor: 'pointer',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: rem(4),
    color: colors.black,
    '& svg': {
      width: rem(22),
      height: rem(22),
    },
  },
  authRow: {
    paddingBottom: rem(16),
    borderBottom: `1px solid ${colors.shekiBorderOuterShadow}`,
  },
userRow: {
    display: 'flex',         
    flexDirection: 'column',   
    alignItems: 'center',      
    justifyContent: 'center', 
    gap: rem(12),
    textAlign: 'center',      
  },
  userName: {
    fontSize: rem(16),
    fontWeight: 600,
    color: colors.black,
  },
  loginRow: {
    padding: `${rem(10)} ${rem(5)} ${rem(10)} ${rem(15)}`,
    display: 'flex',
    alignItems: 'center',
    gap: rem(8),
    cursor: 'pointer',
  },
  loginText: {
    userSelect: 'none',
    fontSize: rem(16),
    color: colors.black,
    
        '&:hover': {
                color: colors.shekiGreenDark,
                fontFamily: 'Nunito Bold, sans-serif',
            }
  },
  list: {
    listStyle: 'none',
    margin: 0,
    padding: 0,
    display: 'flex',
    flexDirection: 'column',
    gap: rem(8),
  },
  authIcon: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: rem(40),
    height: rem(40),
    backgroundColor: colors.shekiGreenLight,
    borderRadius: '50%',
    marginRight: rem(3),
    transition: transition(),

    '& svg': {
      width: rem(20),
      height: rem(20),
    },
  },
};

export const useSideMenuStyles = createUseStyles(styles);
