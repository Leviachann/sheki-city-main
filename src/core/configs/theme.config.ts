import { ThemeConfig } from 'antd';
import colors from 'assets/styles/abstracts/color';

const themeConfig: ThemeConfig = {
  token: {
    colorPrimary: colors.shekiGreen,
    colorLink: colors.shekiGreen,
    colorLinkHover: colors.shekiGreenDark,
    borderRadius: 8,
    controlHeight: 45,
    fontFamily: 'Nunito Regular, sans-serif',
  },
  components: {
    Button: {
      colorPrimary: colors.shekiGreen,
      borderRadius: 8,
    },
    Input: {
      borderRadius: 20,
      colorBorder: 'transparent',
      controlOutline: 'transparent',
      colorBgContainer: colors.shekiGreenLight,
      colorText: colors.shekiGreyText,
      colorTextPlaceholder: colors.shekiGreenDark,
    },
    Modal: {
      borderRadius: 12,
    },
    Select: {
      controlOutline: 'transparent',
      colorBorder: 'transparent',
      colorBgContainer: colors.shekiGreenLight,
      borderRadius: 20,
      colorText: colors.shekiGreyText,
      colorTextQuaternary: colors.shekiGreenDark,
      colorTextPlaceholder: colors.shekiGreenDark,
      controlItemBgActive: 'transparent',
    },
    Carousel: {
      dotWidth: 8,
    },
  },
};

export default themeConfig;