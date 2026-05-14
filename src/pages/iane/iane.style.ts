import { createUseStyles } from 'react-jss';
import { rem } from 'assets/styles/abstracts/functions';
import colors from 'assets/styles/abstracts/color';

const styles = {
    container: {
        position: 'relative',
        width: '100%',
        minHeight: rem(400),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        padding: `${rem(60)} ${rem(20)}`,
        backgroundColor: colors.white, 
        borderTop: `${rem(1)} solid ${colors.headerBorder}`,
    },
    backButton: {
        position: 'absolute',
        top: rem(20),
        left: rem(20),
        display: 'flex',
        alignItems: 'center',
        background: 'none',
        border: 'none',
        color: colors.shekiGreenDark,
        fontSize: rem(16),
        fontWeight: 'bold',
        cursor: 'pointer',
        fontFamily: 'Ecluid Circular Bold, sans-serif',
        '&:hover': {
            opacity: 0.8,
        }
    },
    iconWrapper: {
        marginRight: rem(8),
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        '& svg': {
            width: rem(20),
            height: rem(20),
        }
    },
    contentArea: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        maxWidth: rem(600),
        textAlign: 'center',
        marginTop: rem(20),
    },
    logo: {
        width: rem(200),
        height: 'auto',
        marginBottom: rem(30),
    },
    title: {
        color: colors.shekiGreyText,
        fontSize: rem(32),
        fontWeight: 'bold',
        fontFamily: 'Ecluid Circular Bold, sans-serif',
        marginBottom: rem(15),
    },
    description: {
        color: colors.shekiGreyText,
        fontSize: rem(16),
        fontFamily: 'Ecluid Circular Regular, sans-serif',
        marginBottom: rem(40),
        lineHeight: 1.5,
        '& strong': {
            fontWeight: 'bold',
            fontFamily: 'Ecluid Circular Bold, sans-serif',
        }
    },
    donateLink: {
        color: colors.shekiGreen,
        fontSize: rem(16),
        textDecoration: 'underline',
        fontWeight: '500',
        '&:hover': {
            color: colors.shekiGreenDark,
        }
    }
};

export const useIaneStyles = createUseStyles(styles);
