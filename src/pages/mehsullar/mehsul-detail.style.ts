import { createUseStyles } from 'react-jss';
import { rem } from 'assets/styles/abstracts/functions';
import colors from 'assets/styles/abstracts/color';
import fonts from 'assets/styles/abstracts/fonts';

const styles = {
    wrapper: {
        minHeight: '100vh',
        width: '100%',
        padding: `${rem(40)} ${rem(0)}`,
    },
    detailContent: {
        maxWidth: rem(1200),
        margin: '0 auto',
        display: 'grid',
        gridTemplateColumns: '1.2fr 0.8fr',
        gap: rem(40),
        alignItems: 'start',
        width: '100%',
        padding: `0 ${rem(20)}`,
        '@media (max-width: 900px)': {
            gridTemplateColumns: '1fr',
        },
    },
    preview: {
        display: 'flex',
        flexDirection: 'column',
        gap: rem(24),
    },
    image: {
        width: '100%',
        height: rem(540),
        objectFit: 'cover',
        borderRadius: rem(20),
        boxShadow: '0 20px 80px rgba(0,0,0,0.16)',
        backgroundColor: colors.bg,
    },
    infoCard: {
        display: 'flex',
        flexDirection: 'column',
        gap: rem(24),
        backgroundColor: 'rgba(255,255,255,0.06)',
        padding: rem(32),
        borderRadius: rem(24),
        boxShadow: '0 10px 40px rgba(0,0,0,0.08)',
        border: '1px solid rgba(255,255,255,0.08)',
    },
    headerRow: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'flex-start',
        gap: rem(16),
        flexWrap: 'wrap',
    },
    title: {
        margin: 0,
        fontSize: rem(36),
        fontFamily: fonts.fontBold,
        color: colors.black,
        lineHeight: 1.05,
    },
    price: {
        fontSize: rem(30),
        fontFamily: fonts.fontBold,
        color: colors.shekiGreen,
    },
    badge: {
        padding: `${rem(8)} ${rem(16)}`,
        borderRadius: rem(999),
        backgroundColor: colors.shekiGreenLight,
        color: colors.shekiGreenDark,
        display: 'inline-flex',
        alignItems: 'center',
        fontSize: rem(14),
        fontFamily: fonts.fontBold,
    },
    description: {
        color: colors.black,
        opacity: 0.9,
        fontSize: rem(16),
        lineHeight: 1.8,
        margin: 0,
    },
    metaList: {
        listStyle: 'none',
        padding: 0,
        margin: 0,
        display: 'grid',
        gap: rem(12),
        '& li': {
            color: colors.black,
            opacity: 0.8,
            fontSize: rem(15),
        },
    },
    backButton: {
        appearance: 'none',
        border: `1px solid ${colors.black}`,
        background: 'transparent',
        borderRadius: rem(999),
        color: colors.black,
        padding: `${rem(10)} ${rem(24)}`,
        cursor: 'pointer',
        fontFamily: fonts.fontBold,
        fontSize: rem(14),
        width: rem(140),
    },
    actionButton: {
        appearance: 'none',
        border: 'none',
        backgroundColor: colors.shekiGreen,
        color: colors.white,
        borderRadius: rem(999),
        padding: `${rem(14)} ${rem(24)}`,
        cursor: 'pointer',
        fontSize: rem(16),
        fontFamily: fonts.fontExtraBold,
        transition: 'background-color 0.3s ease',
        '&:hover': {
            backgroundColor: colors.shekiGreenDark,
        },
    },
    errorMessage: {
        color: colors.white,
        textAlign: 'center',
        padding: rem(40),
    },
};

export const useMehsulDetailStyles = createUseStyles(styles);