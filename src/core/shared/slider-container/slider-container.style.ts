import { createUseStyles } from 'react-jss';
import { rem } from 'assets/styles/abstracts/functions';
import colors from 'assets/styles/abstracts/color';

const styles = {
  wrapper: {
    width: '100%',
    margin: `${rem(32)} 0`,
  },
  sectionHeaderWithControls: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: rem(24),
  },
  title: {
    fontSize: rem(28),
    fontWeight: 700,
    color: colors.shekiGreenDark,
    margin: `${rem(20)} 0`,
  },
  sliderNavigationBox: {
    display: 'flex',
    gap: rem(12),
  },
  navButton: {
    width: rem(40),
    height: rem(40),
    borderRadius: '50%',
    border: `1px solid ${colors.greyBorder}`,
    backgroundColor: colors.white,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: rem(22),
    color: colors.greyDark,
    cursor: 'pointer',
    transition: 'all 0.2s ease',
    outline: 'none',
    '&:hover': {
      backgroundColor: colors.white,
      borderColor: colors.shekiGreen,
    },
  },
  carouselWrapper: {
    width: '100%',
    '& .slick-slide': {
      height: 'auto',
      display: 'inline-block', 
      verticalAlign: 'top',
    },
    '& .slick-slide > div': {
      display: 'block',
      width: '100%',
    }
  },
  carouselItemPadding: {
    padding: `0 ${rem(12)}`,
    boxSizing: 'border-box',
    width: '100%',
    display: 'block',
  },
};

export const useSliderContainerStyles = createUseStyles(styles);