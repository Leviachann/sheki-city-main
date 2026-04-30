import { createUseStyles } from "react-jss";
import { rem } from "assets/styles/abstracts/functions";
import colors from "assets/styles/abstracts/color";

const styles = {
  navbar: {
    backgroundColor: colors.white,
    position: "fixed",
    top: 0,
    left: 0,
    width: "100%",
    zIndex: 1000,
    borderBottom: `1px solid ${colors.shekiBorderOuterShadow}`,
  },
  logoLabel: {
    color: colors.shekiGreenDark,
    fontFamily: "Nunito ExtraBold, sans-serif",
    
    padding: `${rem(0)} ${rem(16)}`,
  },
  inner: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    padding: `${rem(16)} ${rem(30)}`,
  },
  logo: {
    display: "flex",
    alignItems: "center",
    "& img": {
      display: "block",
      width: rem(120),
    },
  },
  links: {
    display: "flex",
    alignItems: "center",
    gap: rem(32),
    listStyle: "none",
    margin: 0,
    padding: 0,
    "& a": {
      color: colors.shekiGreen,
      textDecoration: "none",
      fontSize: rem(15),
      fontWeight: 500,
      "&:hover": {
        color: colors.shekiGreenDark,
      },
      "&.active": {
        color: colors.shekiGreen,
        fontWeight: 700,
      },
    },
  },
  hamburger: {
    background: "none",
    border: "none",
    cursor: "pointer",
    padding: rem(8),
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color: colors.shekiGreen,
    "& svg": {
      width: rem(24),
      height: rem(24),
    },
    "&:hover": {
      color: colors.shekiGreen,
    },
  },
};

export const useNavbarStyles = createUseStyles(styles);
