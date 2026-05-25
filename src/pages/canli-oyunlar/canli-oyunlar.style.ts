import { createUseStyles } from 'react-jss';
import { rem } from 'assets/styles/abstracts/functions';

const styles = {
    videoWrapper: {
        position: 'relative',
        width: '100%',
        paddingTop: '56.25%', 
        marginTop: rem(32),
        borderRadius: rem(36),
        overflow: 'hidden',
    },
    iframe: {
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        border: 'none',
    },
};

export const useCanliOyunlarStyles = createUseStyles(styles);