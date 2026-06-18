import { createUseStyles } from 'react-jss';
import { rem } from 'assets/styles/abstracts/functions';
import colors from 'assets/styles/abstracts/color';
import fonts from 'assets/styles/abstracts/fonts';

const styles = {
  sizeSection: {
    display: 'flex',
    flexDirection: 'column',
    gap: rem(12),
  },
  sizeLabel: {
    fontSize: rem(15),
    fontFamily: 'Ecluid Circular Bold, sans-serif',
    color: colors.black,
  },
  divide: {
    border: 'none',
    height: '1px',
    backgroundColor: colors.shekiGreen,
    width: '100%',
    margin: `${rem(4)} 0`,
  },
  sizeGrid: {
    display: 'flex',
    gap: rem(12),
    flexWrap: 'wrap',
  },
  sizeButton: {
    appearance: 'none',
    border: '1px solid #ddd',
    background: colors.white,
    borderRadius: rem(8),
    padding: `${rem(8)} ${rem(16)}`,
    minWidth: rem(48),
    height: rem(48),
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    cursor: 'pointer',
    fontFamily: fonts.fontBold,
    fontSize: rem(14),
    color: colors.black,
    transition: 'all 0.2s ease',
    '&:hover:not(.disabled)': {
      borderColor: colors.shekiGreen,
      color: colors.shekiGreen,
    },
    '&.active': {
      backgroundColor: colors.shekiGreen,
      borderColor: colors.shekiGreen,
      color: '#fff',
    },
    '&.disabled': {
      opacity: 0.4,
      cursor: 'not-allowed',
      backgroundColor: colors.white,
      textDecoration: 'line-through',
      borderColor: '#ddd',
      color: '#aaa',
    },
  },
  skeletonText: {
    width: rem(80),
    height: rem(20),
    backgroundColor: colors.white,
    borderRadius: rem(4),
    marginBottom: rem(12),
  },
  skeletonGrid: {
    display: 'flex',
    gap: rem(12),
  },
  skeletonButton: {
    width: rem(48),
    height: rem(48),
    backgroundColor: colors.white,
    borderRadius: rem(8),
  },
};

export const useSizeSelectorStyles = createUseStyles(styles);
