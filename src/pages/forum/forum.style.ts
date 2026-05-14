import { createUseStyles } from 'react-jss';
import { rem } from 'assets/styles/abstracts/functions';
import colors from 'assets/styles/abstracts/color';

const styles = {
    container: {
        width: '100%',
        maxWidth: rem(900),
        margin: '0 auto',
        padding: `${rem(40)} ${rem(20)}`,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    headerRow: {
        width: '100%',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: rem(30),
    },
    backButton: {
        display: 'flex',
        alignItems: 'center',
        background: 'none',
        border: 'none',
        color: colors.shekiGreyText,
        fontSize: rem(16),
        fontWeight: 'bold',
        cursor: 'pointer',
        fontFamily: 'Ecluid Circular Bold, sans-serif',
        '&:hover': {
            opacity: 0.8,
        }
    },
    backIconWrapper: {
        marginRight: rem(8),
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: colors.shekiPaleGreen,
        borderRadius: '50%',
        width: rem(32),
        height: rem(32),
        '& svg': {
            width: rem(16),
            height: rem(16),
        }
    },
    addButton: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'transparent',
        border: `${rem(1)} solid ${colors.shekiGreenDark}`,
        color: colors.shekiGreenDark,
        borderRadius: rem(20),
        padding: `${rem(8)} ${rem(20)}`,
        fontSize: rem(12),
        fontWeight: '600',
        cursor: 'pointer',
        fontFamily: 'Ecluid Circular Bold, sans-serif',
        '&:hover': {
            backgroundColor: colors.shekiPaleGreen,
        }
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
        fontWeight: 'bold',
        fontFamily: 'Ecluid Circular Bold, sans-serif',
        marginBottom: rem(6),
    },
    cardDesc: {
        color: colors.shekiGreyText,
        fontSize: rem(14),
        fontFamily: 'Ecluid Circular Regular, sans-serif',
    },
    arrowContainer: {
        width: rem(32),
        height: rem(32),
        borderRadius: '50%',
        backgroundColor: colors.shekiPaleGreen,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexShrink: 0,
        marginLeft: rem(10),
        '& svg': {
            width: rem(16),
            height: rem(16),
            stroke: colors.shekiGreenDark,
        }
    }
};

export const useForumStyles = createUseStyles(styles);
