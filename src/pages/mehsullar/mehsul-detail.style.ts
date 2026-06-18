import { createUseStyles } from 'react-jss';
import { rem } from 'assets/styles/abstracts/functions';
import colors from 'assets/styles/abstracts/color';
import fonts from 'assets/styles/abstracts/fonts';

const styles = {
    wrapper: {
        width: '100%',
        backgroundColor: '#fff',
    },
    detailContent: {
        display: 'flex',
        justifyContent: 'space-between',
        gap: rem(40),
        alignItems: 'flex-end',
        width: '100%',
        position: 'relative',
        '@media (max-width: 992px)': {
            flexDirection: 'column',
            alignItems: 'stretch',
            gap: rem(24),
        },
    },
    textSection: {
        display: 'flex',
        flexDirection: 'column',
        gap: rem(16),
        textAlign: 'left',
        flex: '1 1 30%', 
        zIndex: 2,
    },
    preview: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        flex: '1.5 1 40%',
        width: '100%',
        marginBottom: rem(-60), 
        zIndex: 1,
        '@media (max-width: 992px)': {
            marginBottom: 0,
        },
    },
    image: {
        width: '100%',
        height: rem(520), 
        maxHeight: rem(520),
        objectFit: 'contain',
        borderRadius: rem(20),
        backgroundColor: 'transparent',
        '@media (max-width: 992px)': {
            height: 'auto',
            maxHeight: rem(400),
        },
    },
    infoCard: {
        display: 'flex',
        flexDirection: 'column',
        gap: rem(24),
        flex: '1 1 30%',
        width: '100%',
        zIndex: 2,
    },
    title: {
        fontSize: rem(40),
    fontFamily: 'Ecluid Circular Bold, sans-serif',
        color: colors.shekiGreen,
        lineHeight: 1.2,
        textTransform: 'uppercase',
    },
    price: {
    fontFamily: 'Ecluid Circular Bold, sans-serif',
        fontSize: rem(36),
        color: colors.shekiGreyText,
    },
    currency: {
        fontSize: rem(26),
        color: colors.shekiGreen,
        marginLeft: rem(4),
    },
    description: {
        color: colors.shekiGreyText,
        fontSize: rem(16),
        lineHeight: 1.6,
    },
    actionRow: {
        paddingTop: rem(8),
    },
    actionButton: {
        appearance: 'none',
        border: 'none',
        backgroundColor: colors.shekiGreen,
        color: colors.white || '#fff',
        borderRadius: rem(50),
        padding: `${rem(14)} ${rem(40)}`,
        cursor: 'pointer',
        fontSize: rem(16),
        fontFamily: fonts.fontExtraBold,
        transition: 'background-color 0.3s ease',
        width: '100%',
        '&:hover': {
            backgroundColor: colors.shekiGreenDark,
        },
    },
    loadingMessage: {
        textAlign: 'center',
        padding: rem(80),
        fontSize: rem(16),
        color: '#666',
    },
    errorMessage: {
        textAlign: 'center',
        padding: rem(80),
        fontSize: rem(16),
        color: '#ff4d4f',
    },
};

export const useMehsulDetailStyles = createUseStyles(styles);