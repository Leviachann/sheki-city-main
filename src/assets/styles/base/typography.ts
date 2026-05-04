import nunitoBold from '../../fonts/Nunito/NunitoSans-Bold.ttf';
import ecluidCirularABold from '../../fonts/Euclid Circular/Euclid Circular A Bold.ttf';
import ecluidCirularASemiBold from '../../fonts/Euclid Circular/Euclid Circular A SemiBold.ttf';
import ecluidCirularARegular from '../../fonts/Euclid Circular/Euclid Circular A Regular.ttf';
import ecluidCirularAMedium from '../../fonts/Euclid Circular/Euclid Circular A Medium.ttf';
import ecluidCirularABoldItalic from '../../fonts/Euclid Circular/Euclid Circular A Bold Italic.ttf';
import ecluidCirularAItalic from '../../fonts/Euclid Circular/Euclid Circular A Italic.ttf';
import ecluidCirularALight from '../../fonts/Euclid Circular/Euclid Circular A Light.ttf';
import ecluidCirularALightItalic from '../../fonts/Euclid Circular/Euclid Circular A Light Italic.ttf';
import nunitoLight from '../../fonts/Nunito/NunitoSans-Light.ttf';
import nunitoSemiBold from '../../fonts/Nunito/NunitoSans-SemiBold.ttf';
import nunitoRegular from '../../fonts/Nunito/NunitoSans-Regular.ttf';
import nunitoThin from '../../fonts/Nunito/NunitoSans-ExtraLight.ttf';
import nunitoXBlack from '../../fonts/Nunito/NunitoSans-ExtraBold.ttf';
import nunitoExtraBold from '../../fonts/Nunito/NunitoSans-ExtraBold.ttf';

const typography = {
  '@font-face': [
    
    {
      fontFamily: 'Ecluid Circular Bold',
      src: `url("${ecluidCirularABold}")`,
    },
    {
      fontFamily: 'Ecluid Circular SemiBold',
      src: `url("${ecluidCirularASemiBold}")`,
    },
    {
      fontFamily: 'Ecluid Circular Medium',
      src: `url("${ecluidCirularAMedium}")`,
    },
    {
      fontFamily: 'Ecluid Circular Italic',
      src: `url("${ecluidCirularAItalic}")`,
    },
    {
      fontFamily: 'Ecluid Circular Bold Italic',
      src: `url("${ecluidCirularABoldItalic}")`,
    },
    {
      fontFamily: 'Ecluid Circular Light',
      src: `url("${ecluidCirularALight}")`,
    },
    {
      fontFamily: 'Ecluid Circular Light Italic',
      src: `url("${ecluidCirularALightItalic}")`,
    },
    {
      fontFamily: 'Ecluid Circular Regular',
      src: `url("${ecluidCirularARegular}")`,
    },
    {
      fontFamily: 'Nunito Bold',
      src: `url("${nunitoBold}")`,
    },
    {
      fontFamily: 'Nunito Light',
      src: `url("${nunitoLight}")`,
    },
    {
      fontFamily: 'Nunito Medium',
      src: `url("${nunitoSemiBold}")`,
    },
    {
      fontFamily: 'Nunito Regular',
      src: `url("${nunitoRegular}")`,
    },
    {
      fontFamily: 'Nunito Thin',
      src: `url("${nunitoThin}")`,
    },
    {
      fontFamily: 'Nunito XBlack',
      src: `url("${nunitoXBlack}")`,
    },
    {
      fontFamily: 'Nunito ExtraBold',
      src: `url("${nunitoExtraBold}")`,
    }
  ],
};

export default typography;
