import colors from 'assets/styles/abstracts/color';
import { rem } from 'assets/styles/abstracts/functions';
import { createUseStyles } from 'react-jss';
const styles = {
  header: {
    display: 'flex',
    justifyContent:'space-between',
    alignItems:'center'
  },
  breadcrumbs: {
    '& .ant-breadcrumb-separator': {
        color: colors.shekiGreenDark,
        fontSize: rem(20),
        display: 'inline-flex',
        alignItems: 'center',
        height: '100%',
        lineHeight: 1,
        verticalAlign: 'middle',
        padding: `0 ${rem(8)}`,
    },
    '& .ant-breadcrumb-link': {
        display: 'inline-flex',
        alignItems: 'center',
    }
  },
  clickable: {
    color:colors.shekiGreyText
  },
  location:{
    fontFamily: 'Ecluid Circular Bold, sans-serif',
  },
  backButton: {
    display: 'flex',
    gap:rem(20),
    alignItems:'center',
    background: 'transparent',
    border: 'none'
  },
  pageTitle:{
    fontSize: rem(18),
    color: colors.shekiGreyText,
    fontFamily: 'Ecluid Circular Bold, sans-serif',
  },
  title: {
    color: colors.shekiGreenDark,
  },
  count: {
    fontFamily: 'Ecluid Circular Bold, sans-serif',
  },
  actions: {
    display:'flex',
    gap: rem(10),
  },
  
};

export const usePageHeaderStyles = createUseStyles(styles);
