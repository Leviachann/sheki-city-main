import { createUseStyles } from 'react-jss';
import { rem } from 'assets/styles/abstracts/functions';
import colors from 'assets/styles/abstracts/color';
import fonts from 'assets/styles/abstracts/fonts';

const IMAGE_OVERFLOW = 60;

const styles = {
    card: {
        width:'100%',
        backgroundColor: colors.white,
        borderRadius: rem(20),
        padding: `${rem(40)} ${rem(16)} ${rem(20)} ${rem(16)}`,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        boxShadow: colors.boxShadow,
        transition: 'transform 0.3s ease, box-shadow 0.3s ease',
        cursor: 'pointer',
        position: 'relative',
        overflow: 'visible',
        marginTop: rem(IMAGE_OVERFLOW),
        '&:hover': {
            transform: 'translateY(-4px)',
        },
    },
    imageContainer: {
        position: 'relative',
        transform: `translateY(calc(-${rem(IMAGE_OVERFLOW)} + ${rem(-20)}))`,
        width: '80%',
        height: rem(400),
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'flex-end',
        pointerEvents: 'none',
        marginBottom: `calc(-${rem(IMAGE_OVERFLOW)} + ${rem(0)})`,
        '& img': {
            width: '100%',
            height: '100%',
            objectFit: 'contain',
        },
    },
    title: {
        fontFamily: fonts.fontExtraBold,
        fontSize: rem(14),
        color: colors.black,
        textAlign: 'center',
        width: '100%',
        marginTop: rem(12),
        marginBottom: rem(16),
        lineHeight: 1.4,
        minHeight: rem(40),
        paddingHorizontal: rem(8),
    },
    button: {
        width: '100%',
        backgroundColor: colors.shekiGreen,
        color: colors.white,
        border: 'none',
        borderRadius: rem(50),
        padding: `${rem(12)} ${rem(24)}`,
        fontFamily: fonts.fontBold,
        fontSize: rem(14),
        cursor: 'pointer',
        transition: 'background-color 0.3s ease',
        marginTop: 'auto',
        '&:hover': {
            backgroundColor: colors.shekiGreenDark,
        },
    },
};

export const useProductCardStyles = createUseStyles(styles);