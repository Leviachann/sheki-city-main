import { createUseStyles } from 'react-jss'; 
import { rem } from 'assets/styles/abstracts/functions';
import colors from 'assets/styles/abstracts/color';

export const useOyuncuDetailStyles = createUseStyles(() => ({
  pageContainer: {
    padding: `${rem(24)} ${rem(40)}`,
  },
  detailCard: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    gap: rem(48),
    backgroundColor: '#f4f8f7',
    border: `${rem(1)} solid #d1e2df`, 
    borderRadius: rem(32),
    padding: `${rem(40)} ${rem(56)}`,
    marginTop: rem(32),
    width: '100%',
    boxSizing: 'border-box',
  },
  imageContainer: {
    width: rem(200),
    height: rem(240),
    display: 'flex',
    alignItems: 'flex-end',
    justifyContent: 'center',
    overflow: 'hidden',
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
  },
  infoColumn: {
    display: 'flex',
    flexDirection: 'column',
    gap: rem(24),
  },
  dataGroup: {
    display: 'flex',
    flexDirection: 'column',
    gap: rem(6),
  },
  label: {
    fontSize: rem(14),
    color: '#6e807c',
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
  },
}));