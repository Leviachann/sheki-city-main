import { createUseStyles } from 'react-jss';
import { rem } from 'assets/styles/abstracts/functions';
import colors from 'assets/styles/abstracts/color';
import fonts from 'assets/styles/abstracts/fonts';

const styles = {
    wrapper: {
        minHeight: '100vh',
        width: '100%',
        backgroundColor: '#fff',
    },
    detailContent: {
        maxWidth: rem(1200),
        margin: '0 auto',
        display: 'grid',
        gridTemplateColumns: '1.1fr 0.9fr',
        gap: rem(48),
        alignItems: 'start',
        width: '100%',
        padding: `${rem(40)} ${rem(24)}`,
        '@media (max-width: 900px)': {
            gridTemplateColumns: '1fr',
            gap: rem(32),
        },
    },
    preview: {
        display: 'flex',
        flexDirection: 'column',
    },
    image: {
        width: '100%',
        height: 'auto',
        maxHeight: rem(600),
        objectFit: 'contain',
        borderRadius: rem(20),
        backgroundColor: colors.white || '#fff',
    },
    infoCard: {
        display: 'flex',
        flexDirection: 'column',
        gap: rem(32),
        paddingTop: rem(16),
    },
    title: {
        margin: 0,
        fontSize: rem(32),
        fontFamily: fonts.fontBold,
        color: colors.black || '#111',
        lineHeight: 1.2,
        textTransform: 'uppercase',
    },
    price: {
        fontSize: rem(28),
        fontFamily: fonts.fontBold,
        color: colors.shekiGreen || '#006643',
        marginTop: rem(16),
        marginBottom: 0,
    },
    description: {
        color: '#555',
        fontSize: rem(16),
        lineHeight: 1.7,
        margin: 0,
    },
    sizeSection: {
        display: 'flex',
        flexDirection: 'column',
        gap: rem(12),
        borderTop: '1px solid #eee',
        paddingTop: rem(24),
    },
    sizeLabel: {
        fontSize: rem(15),
        fontFamily: fonts.fontBold,
        color: colors.black || '#111',
    },
    sizeGrid: {
        display: 'flex',
        gap: rem(12),
        flexWrap: 'wrap',
    },
    sizeButton: {
        appearance: 'none',
        border: '1px solid #ddd',
        background: '#fff',
        borderRadius: rem(8),
        width: rem(48),
        height: rem(48),
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        cursor: 'pointer',
        fontFamily: fonts.fontBold,
        fontSize: rem(14),
        color: colors.black || '#111',
        transition: 'all 0.2s ease',
        '&:hover:not(.disabled)': {
            borderColor: colors.shekiGreen || '#006643',
            color: colors.shekiGreen || '#006643',
        },
        '&.active': {
            backgroundColor: colors.shekiGreen || '#006643',
            borderColor: colors.shekiGreen || '#006643',
            color: '#fff',
        },
        '&.disabled': {
            opacity: 0.4,
            cursor: 'not-allowed',
            backgroundColor: '#f5f5f5',
            textDecoration: 'line-through',
        },
    },
    actionRow: {
        borderTop: '1px solid #eee',
        paddingTop: rem(24),
    },
    actionButton: {
        appearance: 'none',
        border: 'none',
        backgroundColor: colors.shekiGreen || '#006643',
        color: colors.white || '#fff',
        borderRadius: rem(50),
        padding: `${rem(14)} ${rem(40)}`,
        cursor: 'pointer',
        fontSize: rem(16),
        fontFamily: fonts.fontExtraBold,
        transition: 'background-color 0.3s ease',
        '&:hover': {
            backgroundColor: colors.shekiGreenDark || '#004d32',
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