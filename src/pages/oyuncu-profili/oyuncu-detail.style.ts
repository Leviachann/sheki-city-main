import { createUseStyles } from 'react-jss'; 
import { rem } from 'assets/styles/abstracts/functions';
import colors from 'assets/styles/abstracts/color';

export const useOyuncuDetailStyles = createUseStyles(() => ({
  pageContainer: {
    padding: `${rem(24)} ${rem(40)}`,
    '@media (max-width: 768px)': {
      padding: `${rem(16)} ${rem(16)}`,
    },
  },
  detailCard: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    gap: rem(48),
    backgroundColor: colors.shekiGreenLight,
    border: `${rem(1)} solid ${colors.shekiBorder }`, 
    borderRadius: rem(32),
    padding: `${rem(40)} ${rem(56)}`,
    marginTop: rem(32),
    width: '100%',
    boxSizing: 'border-box',
    
    '@media (max-width: 992px)': {
      flexDirection: 'column',
      alignItems: 'center',
      gap: rem(32),
      padding: `${rem(32)} ${rem(24)}`,
    },
  },
  imageContainer: {
    width: rem(200),
    height: rem(240),
    display: 'flex',
    alignItems: 'flex-end',
    justifyContent: 'center',
    overflow: 'hidden',
    flexShrink: 0,
  },
  playerImage: {
    height: '100%',
    width: 'auto',
    objectFit: 'contain',
  },
  infoGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
    gap: rem(40),
    flexGrow: 1,
    width: '100%',

    '@media (max-width: 768px)': {
      gridTemplateColumns: 'repeat(2, 1fr)',
      gap: rem(24),
    },
    '@media (max-width: 480px)': {
      gridTemplateColumns: '1fr',
      gap: rem(16),
    },
  },
  infoColumn: {
    display: 'flex',
    flexDirection: 'column',
    gap: rem(24),
    '@media (max-width: 480px)': {
      gap: rem(16),
    },
  },
  dataGroup: {
    display: 'flex',
    flexDirection: 'column',
    gap: rem(6),
    wordBreak: 'break-word', 
  },
  label: {
    fontSize: rem(14),
    color: colors.shekiGreyText || '#6e807c',
    fontWeight: 500,
  },
  value: {
    fontSize: rem(16),
    color: colors.shekiGreenDark,
    fontWeight: 600,
  },
  valueHighlight: {
    fontSize: rem(18),
    color: colors.shekiGreen,
    fontWeight: 700,
    '@media (max-width: 480px)': {
      fontSize: rem(20),
    },
  },
}));