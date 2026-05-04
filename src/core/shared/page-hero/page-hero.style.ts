import { createUseStyles } from 'react-jss';
import { rem } from 'assets/styles/abstracts/functions';
import colors from 'assets/styles/abstracts/color';

const styles = {
    heroContainer: {
        position: 'relative', 
        width: '100%',
        height: rem(200),
        backgroundColor: '#f0f7f7', 
        borderRadius: rem(40), 
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        margin: `${rem(20)} 0`,
        overflow: 'hidden', 
    },
    waveSvg: {
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        objectFit: 'cover',
        zIndex: 1, 
    },
    content: {
        position: 'relative',
        zIndex: 2,
        textAlign: 'center',
    },
    title: {
        color: colors.shekiGreenDark,
        fontSize: rem(48),
        fontWeight: 700,
        fontFamily: 'Nunito Bold, sans-serif',
    },
    subtitle: {
        color: colors.black,
        fontSize: rem(16),
        fontWeight: 500,
        marginTop: rem(10),
    }
};

export const usePageHeroStyles = createUseStyles(styles);