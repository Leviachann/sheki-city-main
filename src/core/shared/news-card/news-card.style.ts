import { createUseStyles } from 'react-jss';
import { rem } from 'assets/styles/abstracts/functions';
import colors from 'assets/styles/abstracts/color';

const styles = {
    card: {
        backgroundColor: colors.white,
        borderRadius: rem(40),
        padding: rem(24),
        boxShadow: '0px 10px 30px rgba(0, 0, 0, 0.05)',
        display: 'flex',
        flexDirection: 'column',
        gap: rem(16),
        transition: 'transform 0.2s ease-in-out',
        '&:hover': {
            transform: 'translateY(-5px)',
        }
    },
    imageWrapper: {
        width: '100%',
        height: rem(220),
        borderRadius: rem(24),
        overflow: 'hidden',
    },
    image: {
        width: '100%',
        height: '100%',
        objectFit: 'cover',
    },
    title: {
        fontSize: rem(18),
        fontWeight: 700,
        color: colors.shekiGreenDark,
        margin: 0,
        fontFamily: 'Ecluid Circular Bold, sans-serif',
    },
    description: {
        fontSize: rem(14),
        color: '#4B5563', 
        lineHeight: 1.5,
        margin: 0,
        display: '-webkit-box',
        WebkitLineClamp: 2,
        WebkitBoxOrient: 'vertical',
        overflow: 'hidden',
    },
    footer: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginTop: 'auto',
        paddingTop: rem(8),
    },
    dateBox: {
        display: 'flex',
        alignItems: 'center',
        gap: rem(8),
        color: '#6B7280',
        fontSize: rem(14),
    },
    moreLink: {
        display: 'flex',
        alignItems: 'center',
        gap: rem(6),
        textDecoration: 'none',
        color: colors.shekiGreenDark,
        fontWeight: 700,
        fontSize: rem(15),
        cursor: 'pointer',
    },
    icon: {
        width: rem(20),
        height: rem(20),
    }
};

export const useNewsCardStyles = createUseStyles(styles);