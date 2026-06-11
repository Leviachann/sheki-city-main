import { createUseStyles } from 'react-jss';
import { rem } from 'assets/styles/abstracts/functions';
import colors from 'assets/styles/abstracts/color';

const styles = {
    container: {
        width: '100%',
        margin: '0 auto',
        padding: `${rem(40)} ${rem(20)}`,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    list: {
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        gap: rem(15),
    },
    card: {
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        padding: `${rem(20)} ${rem(30)}`,
        backgroundColor: colors.white,
        borderRadius: rem(30),
        border: `${rem(1)} solid ${colors.border}`,
        cursor: 'pointer',
        transition: 'all 0.2s ease-in-out',
        '&:hover': {
            borderColor: colors.shekiGreenDark,
            boxShadow: '0 4px 12px rgba(0,0,0,0.05)',
        }
    },
    iconContainer: {
        width: rem(64),
        height: rem(64),
        borderRadius: '50%',
        backgroundColor: colors.shekiPaleGreen,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        marginRight: rem(24),
        flexShrink: 0,
        '& svg': {
            width: rem(32),
            height: rem(32),
            fill: colors.shekiGreenDark,
        },
        '& img': {
            width: rem(32),
            height: rem(32),
            objectFit: 'contain',
        }
    },
    textContainer: {
        flex: 1,
        display: 'flex',
        flexDirection: 'column',
    },
    cardTitle: {
        color: colors.shekiGreyText,
        fontSize: rem(18),
        fontFamily: 'Ecluid Circular Bold, sans-serif',
        marginBottom: rem(6),
    },
    cardDesc: {
        color: colors.shekiGreyText,
        fontSize: rem(14),
    },
};

export const useForumStyles = createUseStyles(styles);
