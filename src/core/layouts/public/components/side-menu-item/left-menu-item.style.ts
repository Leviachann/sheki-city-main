import {rem} from 'assets/styles/abstracts/functions';
import colors from 'assets/styles/abstracts/color';
import {createUseStyles} from 'react-jss';
import sizes from 'assets/styles/abstracts/sizes';
import {transition} from 'assets/styles/abstracts/mixins';

const styles = {
    item: {
        marginBottom: '4px',
    },
    link: {
        userSelect: 'none',
        alignItems: 'center',
        borderRadius: sizes.borderRadiusSm,
        transition: transition(),
        cursor: 'pointer',
        padding: `${rem(10)} ${rem(5)} ${rem(10)} ${rem(15)}`,
        display: 'flex',
        justifyContent: 'space-between',

        '&:hover': {
            '& $itemText span': {
                color: colors.shekiGreenDark,
                fontFamily: 'Nunito Bold, sans-serif',
            },
        },
        '&.active': {
            pointerEvents: 'none',
            '& $itemText span': {
                fontFamily: 'Nunito Bold, sans-serif',
                color: colors.shekiGreenDark,
                fontWeight: 800,
            },
        }
    },
    itemText: {
        display: 'flex',
        alignItems: 'center',
        color: colors.black,
        fontSize: rem(16),
        fontWeight: 500,
        letterSpacing: '1px',
        transition: transition(),
    },
    iconWrapper: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: rem(40), 
        height: rem(40), 
        backgroundColor: colors.shekiGreenLight, 
        borderRadius: '50%', 
        marginRight: rem(12),
        transition: transition(),
        
        '& svg': {
            width: rem(20), 
            height: rem(20),
        },
    },
    active: {}
};

export const useLeftMenuItemStyles = createUseStyles(styles);
