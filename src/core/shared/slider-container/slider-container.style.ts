
import { createUseStyles } from 'react-jss';
import { rem } from 'assets/styles/abstracts/functions';

const styles = {
  sectionHeaderWithControls: {
    display: 'flex',
    justifyContent: 'flex-end',
    alignItems: 'center',
    marginBottom: rem(24),
  },
  sliderNavigationBox: {
    display: 'flex',
    gap: rem(12),
  },
  navButton: {
    width: rem(40),
    height: rem(40),
    borderRadius: '50%',
    border: '1px solid #E4E7EC',
    backgroundColor: '#FFFFFF',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: rem(22),
    color: '#475467',
    cursor: 'pointer',
    transition: 'all 0.2s ease',
    outline: 'none',
    '&:hover': {
      backgroundColor: '#F9FAFB',
      borderColor: '#D0D5DD',
    },
  },
  carouselWrapper: {
    width: '100%',
    '& .slick-track': { display: 'flex !important' },
    '& .slick-slide': { height: 'auto' },
  },
  carouselItemPadding: {
    padding: `0 ${rem(12)}`,
    boxSizing: 'border-box',
  },
};

export const useSliderContainerStyles = createUseStyles(styles);