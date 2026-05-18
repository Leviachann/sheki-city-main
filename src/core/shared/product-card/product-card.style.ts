import { createUseStyles } from 'react-jss';
import { rem } from 'assets/styles/abstracts/functions';
import colors from 'assets/styles/abstracts/color';
import fonts from 'assets/styles/abstracts/fonts';

const styles = {
    card: {
        backgroundColor: colors.paleBlack, // Dark card background
        borderRadius: rem(20),
        padding: rem(20),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        boxShadow: colors.boxShadow, // Using predefined shadow suitable for dark mode
        transition: 'transform 0.3s ease, box-shadow 0.3s ease',
        cursor: 'pointer',
        border: `1px solid ${colors.gray}`, // Subtle border
        '&:hover': {
            transform: 'translateY(-5px)',
            boxShadow: `0 ${rem(8)} ${rem(30)} rgba(67, 97, 238, 0.4)`, // Glow effect on hover
        },
    },
    imageContainer: {
        width: '100%',
        height: rem(250),
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: rem(20),
        backgroundColor: colors.white, // Keep white background for product images to pop out, or transparent
        borderRadius: rem(10),
        padding: rem(10),
        '& img': {
            maxWidth: '100%',
            maxHeight: '100%',
            objectFit: 'contain',
        },
    },
    variants: {
        display: 'flex',
        gap: rem(8),
        marginBottom: rem(16),
        justifyContent: 'center',
        alignItems: 'center',
    },
    variantDot: {
        width: rem(8),
        height: rem(8),
        borderRadius: '50%',
        backgroundColor: colors.shekiGreenDark,
        '&:nth-child(2)': {
            backgroundColor: colors.shekiGreen,
        },
        '&:nth-child(3)': {
            backgroundColor: 'transparent',
            border: `1px solid ${colors.shekiGreen}`,
        },
    },
    title: {
        fontFamily: fonts.fontBold,
        fontSize: rem(14),
        color: colors.white, // White text for dark mode
        textAlign: 'center',
        marginBottom: rem(20),
        lineHeight: 1.5,
        minHeight: rem(42),
    },
    button: {
        width: '100%',
        backgroundColor: colors.shekiGreenDark,
        color: colors.white,
        border: 'none',
        borderRadius: rem(20),
        padding: `${rem(12)} ${rem(24)}`,
        fontFamily: fonts.fontMedium,
        fontSize: rem(14),
        cursor: 'pointer',
        transition: 'background-color 0.3s ease',
        '&:hover': {
            backgroundColor: colors.shekiGreen,
        },
    },
};

export const useProductCardStyles = createUseStyles(styles);
