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
    backgroundColor: 'rgba(0,0,0,0.5)',
    zIndex: 1500,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  modalContent: {
    backgroundColor: colors.white,
    width: '100%',
    maxWidth: rem(500),
    padding: rem(24),
    borderRadius: rem(30),
    boxShadow: '0px 10px 30px rgba(0,0,0,0.1)',
    display: 'flex',
    flexDirection: 'column',
    position: 'relative',
  },
  modalHeader: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: rem(20),
    '& h3': {
      fontSize: rem(18),
      fontWeight: 600,
      color: colors.shekiGreenDark,
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
  },
  modalForm: {
    display: 'flex',
    flexDirection: 'column',
    gap: rem(14),
  },
  inputField: {
    width: '100%',
    padding: `${rem(12)} ${rem(16)}`,
    borderRadius: rem(20),
    border: `1px solid ${colors.shekiBorderOuterShadow}`,
    outline: 'none',
    fontSize: rem(14),
    color: colors.black,
    transition: transition(),
    backgroundColor: 'transparent',
    '&::placeholder': {
      color: colors.greyPlaceholder,
    },
    '&:focus': {
      borderColor: colors.shekiGreenDark,
    },
  },
  inputRow: {
    display: 'flex',
    gap: rem(10),
    '& > input': {
      flex: 1,
    },
  },
  textAreaField: {
    width: '100%',
    padding: `${rem(12)} ${rem(16)}`,
    borderRadius: rem(20),
    border: `1px solid ${colors.shekiBorderOuterShadow}`,
    outline: 'none',
    fontSize: rem(14),
    color: colors.black,
    resize: 'none',
    transition: transition(),
    backgroundColor: 'transparent',
    '&::placeholder': {
      color: colors.greyPlaceholder,
    },
    '&:focus': {
      borderColor: colors.shekiGreenDark,
    },
  },
  fileUploadWrapper: {
    position: 'relative',
    width: '100%',
  },
  fileLabel: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: `${rem(12)} ${rem(16)}`,
    borderRadius: rem(20),
    border: `1px solid ${colors.shekiBorderOuterShadow}`,
    cursor: 'pointer',
    fontSize: rem(14),
    transition: transition(),
    '& span:last-child': {
      color: colors.shekiGreenDark,
    },
  },
  hiddenInput: {
    display: 'none',
  },
  submitBtn: {
    backgroundColor: colors.shekiGreenDark,
    color: colors.white,
    border: 'none',
    padding: rem(12),
    borderRadius: rem(20),
    cursor: 'pointer',
    fontWeight: 600,
    fontSize: rem(16),
    marginTop: rem(10),
    transition: transition(),
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    '&:hover': {
      opacity: 0.9,
    },
    '&:disabled': {
      backgroundColor: colors.greyLabel,
      cursor: 'not-allowed',
    },
  },
};

export const useVacancyApplyModalStyles = createUseStyles(styles);