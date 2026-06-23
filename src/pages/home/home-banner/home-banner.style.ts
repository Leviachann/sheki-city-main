import { createUseStyles } from 'react-jss';

const smoothSlantPath = 'polygon(22% 0%, 100% 0%, 100% 100%, 6% 100%, 4.2% 99.4%, 2.8% 98.2%, 1.7% 96.5%, 0.9% 94.2%, 0.4% 91.3%, 0.1% 87.8%, 0% 83%, 11.5% 14%, 11.9% 11.5%, 12.5% 9.2%, 13.3% 7.1%, 14.3% 5.3%, 15.5% 3.7%, 16.9% 2.3%, 18.5% 1.2%, 20.2% 0.4%)';

export const useHomeBannerStyles = createUseStyles({
  outerContainer: {
    position: 'relative',
    width: '100%',
    backgroundColor: '#f4f9f7', 
    borderRadius: '24px',
    overflow: 'hidden',
    padding: '40px 0px 40px 60px', 
    display: 'flex',
    alignItems: 'center',
    minHeight: '440px',
  },

  waveSvg: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    zIndex: 1,
    pointerEvents: 'none',
  },

  contentLayout: {
    position: 'relative',
    zIndex: 2,
    width: '100%',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  textSection: {
    width: '50%',
    display: 'flex',
    flexDirection: 'column',
    gap: '16px',
    paddingRight: '20px',
  },

  title: {
    fontSize: '2.5rem',
    fontWeight: 800,
    color: '#043e35',
    lineHeight: '1.2',
  },

  subtitle: {
    fontSize: '1.1rem',
    color: '#556b67', 
    lineHeight: '1.5',
  },

  ctaButton: {
    alignSelf: 'flex-start',
    backgroundColor: '#006654',
    color: '#ffffff',
    border: 'none',
    borderRadius: '100px',
    padding: '12px 32px',
    fontSize: '1rem',
    fontWeight: 500,
    cursor: 'pointer',
    transition: 'background-color 0.2s ease, transform 0.1s ease',
    marginTop: '12px',
    '&:hover': {
      backgroundColor: '#034d40',
    },
    '&:active': {
      transform: 'scale(0.98)',
    },
  },

  graphicWrapper: {
    position: 'relative',
    width: '48%',
    height: '400px', 
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
  },

  imageCard: {
    position: 'absolute',
    right: 0,
    width: '100%',
    height: '100%',
    zIndex: 10,
    overflow: 'hidden',
    clipPath: smoothSlantPath,
    boxShadow: '-10px 15px 40px rgba(4, 62, 53, 0.12)',
  },

  imgElement: {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    objectPosition: 'center top',
  },

  shadowFrame: {
    position: 'absolute',
    right: 0,
    width: '100%',
    height: '100%',
    clipPath: smoothSlantPath,
    transformOrigin: 'bottom right', 
    transition: 'transform 0.4s cubic-bezier(0.16, 1, 0.3, 1)',
  },
  frameLayer1: {
    zIndex: 9,
    backgroundColor: '#075245', 
    transform: 'translateX(-20px) translateY(20px) rotate(5deg)',
  },

  frameLayer2: {
    zIndex: 8,
    backgroundColor: '#1b7463', 
    transform: 'translateX(-60px) translateY(70px) rotate(15deg)',
  },

  frameLayer3: {
    zIndex: 7,
    backgroundColor: '#409282', 
    transform: 'translateX(-80px) translateY(90px) rotate(20deg)',
  },
  
  '@media (max-width: 960px)': {
    outerContainer: {
      flexDirection: 'column',
      padding: '40px 20px',
    },
    contentLayout: {
      flexDirection: 'column',
      gap: '40px',
    },
    textSection: {
      width: '100%',
    },
    graphicWrapper: {
      width: '100%',
      height: '320px',
    },
  },
});