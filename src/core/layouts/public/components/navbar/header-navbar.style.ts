import { createUseStyles } from "react-jss";
import { rem } from "assets/styles/abstracts/functions";
import colors from "assets/styles/abstracts/color";

const styles = {
  navbar: {
    padding:`${rem(0)} ${rem(20)}`,
    backgroundColor: colors.white,
    position: "fixed",
    width: "100%",
    zIndex: 1000,
    borderBottom: `1px solid ${colors.shekiBorderOuterShadow}`,
  },
  logoLabel: {
    userSelect: "none",
    color: colors.shekiGreenDark,
    fontFamily: "Ecluid Circular Bold, sans-serif",
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
  },
  links: {
    userSelect: "none",
    display: "flex",
    alignItems: "center",
    gap: rem(32),
    listStyle: "none",
    "& a": {
      color: colors.black,
      textDecoration: "none",
      fontSize: rem(15),
      "&:hover": {
        color: colors.shekiGreenDark,
      },
      "&.active": {
        color: colors.shekiGreenDark,
        fontFamily: "Nunito Bold, sans-serif",
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
