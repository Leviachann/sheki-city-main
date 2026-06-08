import colors from 'assets/styles/abstracts/color';
import { rem } from 'assets/styles/abstracts/functions';
import { createUseStyles } from 'react-jss';

export const useVakansiyaDetailStyles = createUseStyles({
  pageContainer: {
    width: '100%',
    minHeight: '100vh',
    backgroundColor: colors.white,
  },
  contentWrapper: {
    margin: `${rem(30)} 0`,
  },
  titleHeader: {
    fontSize: '36px',
    fontWeight: 800,
    color: colors.shekiGreyText,
    margin: `${rem(30)} 0`,
  },
  descriptionSection: {
    fontSize: '16px',
    lineHeight: '1.8',
    color: colors.shekiGreenDark,
    marginBottom: '40px',
    '& ul': {
      paddingLeft: '20px',
      margin: '16px 0',
    },
    '& li': {
      marginBottom: '12px',
      listStyleType: 'disc',
    },
  },
  footerRow: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
    borderTop: '1px solid #e0e6e4',
    paddingTop: '32px',
    marginTop: '40px',
  },
  datesContainer: {
    display: 'flex',
    flexDirection: 'column',
    gap: '12px',
  },
  dateText: {
    fontSize: '15px',
     color: colors.shekiGreenDark,
    margin: 0,
    '& span': {
      fontWeight: 700,
      marginLeft: '4px',
    },
  },
  actionButton: {
    backgroundColor: colors.shekiGreen,
    color: colors.white,
    border: 'none',
    borderRadius: '24px',
    padding: '14px 36px',
    fontSize: '15px',
    fontWeight: 600,
    cursor: 'pointer',
    transition: 'background-color 0.2s ease',
    '&:hover': {
      backgroundColor: colors.shekiGreenDark,
    },
  },
});