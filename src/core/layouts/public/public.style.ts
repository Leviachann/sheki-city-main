import { createUseStyles } from 'react-jss';
import { rem } from 'assets/styles/abstracts/functions';
import { transition } from 'assets/styles/abstracts/mixins';
import colors from 'assets/styles/abstracts/color';

const styles = {
    public: {
        minHeight: '100vh',
        backgroundColor: colors.shekiPageBg,
    },
    content: {
        
        minHeight: '100vh',
        paddingTop: rem(100),
        paddingLeft: rem(20),
        paddingRight: rem(20),
        transition: transition(),
    },
    shifted: {},
};

export const usePublicLayoutStyles = createUseStyles(styles);