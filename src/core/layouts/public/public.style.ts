import { createUseStyles } from "react-jss";
import { rem } from "assets/styles/abstracts/functions";
import { transition } from "assets/styles/abstracts/mixins";
import colors from "assets/styles/abstracts/color";

const styles = {
  public: {
    minHeight: "100vh",
    backgroundColor: colors.shekiPageBg,
    display: "flex",
    flexDirection: "column",
  },
  content: {
    flex: 1,
    paddingTop: rem(100),
    paddingLeft: rem(50),
    paddingRight: rem(50),
    transition: transition(),
    width: "100%",
    boxSizing: "border-box",
  },
  shifted: {},
};

export const usePublicLayoutStyles = createUseStyles(styles);
