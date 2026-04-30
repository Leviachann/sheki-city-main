import { createUseStyles } from 'react-jss';
import { rem } from 'assets/styles/abstracts/functions';
import { transition } from 'assets/styles/abstracts/mixins';
import colors from 'assets/styles/abstracts/color';

const styles = {
    backdrop: {
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        backgroundColor: 'rgba(0,0,0,0.4)',
        zIndex: 1001,
    },
    sideMenu: {
        position: 'fixed',
        top: 0,
        right: 0,
        width: rem(320),
        height: '100vh',
        backgroundColor: colors.white,
        zIndex: 1002,
        padding: `${rem(24)} ${rem(24)}`,
        transform: `translateX(${rem(320)})`, 
        transition: transition(),
        display: 'flex',
        flexDirection: 'column',
        gap: rem(24),
        boxShadow: '-4px 0 20px rgba(0,0,0,0.1)',
    },
    open: {
        transform: 'translateX(0)',
    },
    menuHeader: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    menuTitle: {
        fontSize: rem(18),
        fontWeight: 700,
        color: colors.black,
    },
    closeBtn: {
        background: 'none',
        border: 'none',
        cursor: 'pointer',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: rem(4),
        color: colors.black,
        '& svg': {
            width: rem(22),
            height: rem(22),
        },
    },
    authRow: {
        paddingBottom: rem(16),
        borderBottom: `1px solid ${colors.shekiBorderOuterShadow}`,
    },
    userRow: {
        display: 'flex',
        alignItems: 'center',
        gap: rem(12),
    },
    userName: {
        fontSize: rem(16),
        fontWeight: 600,
        color: colors.black,
    },
    loginRow: {
        display: 'flex',
        alignItems: 'center',
        gap: rem(8),
        cursor: 'pointer',
    },
    loginText: {
        fontSize: rem(16),
        color: colors.black,
        fontWeight: 500,
    },
    list: {
        listStyle: 'none',
        margin: 0,
        padding: 0,
        display: 'flex',
        flexDirection: 'column',
        gap: rem(8),
    },
};

export const useSideMenuStyles = createUseStyles(styles);