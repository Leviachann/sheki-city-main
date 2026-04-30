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
            borderRadius: 8,
        },
        Modal: {
            borderRadius: 12,
        },
    },
};

export default themeConfig;