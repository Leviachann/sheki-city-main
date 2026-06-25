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
    zIndex: 1500,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  modalContent: {
    backgroundColor: colors.white,
    width: rem(540),
    padding: `${rem(40)} ${rem(48)}`,
    borderRadius: rem(40),
    boxShadow: '0 20px 40px rgba(0,0,0,0.15)',
    display: 'flex',
    flexDirection: 'column',
    gap: rem(24),
    position: 'relative',
  },
  modalHeader: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    '& h3': {
      fontSize: rem(20),
      fontWeight: 700,
      color: colors.black,
      margin: 0,
    },
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
      width: rem(24),
      height: rem(24),
    },
  },
  modalForm: {
    display: 'flex',
    flexDirection: 'column',
    gap: rem(16),
  },
  inputGroup: {
    width: '100%',
    '& input': {
      width: '100%',
      height: rem(54),
      padding: `0 ${rem(24)}`,
      border: `1px solid ${colors.shekiBorderOuterShadow}`,
      borderRadius: rem(100),
      fontSize: rem(15),
      color: colors.black,
      outline: 'none',
      transition: transition(),
      backgroundColor: 'transparent',
      '&::placeholder': {
        color: colors.greyPlaceholder,
      },
      '&:focus': {
        borderColor: colors.shekiGreenDark,
      },
    },
  },
  loginSubmitBtn: {
    height: rem(50),
    backgroundColor: colors.shekiGreenDark,
    color: colors.white,
    border: 'none',
    borderRadius: rem(100),
    fontSize: rem(16),
    fontWeight: 700,
    cursor: 'pointer',
    transition: transition(),
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: rem(8),
    width: rem(140),
    alignSelf: 'flex-end',
    '&:hover': {
      opacity: 0.9,
    },
  },
};

export const useLoginModalStyles = createUseStyles(styles);