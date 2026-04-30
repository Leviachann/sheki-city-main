import { useFooterStyles } from "./footer.style";
import { NavLink } from "react-router-dom";
import { Routes } from "router/routes";
import useLocalization from "assets/lang";
import { ShekiCityLogo } from "assets/images/icons/sheki-city-logo";
import { FacebookIcon } from "assets/images/icons/socials/facebook";
import { InstagramIcon } from "assets/images/icons/socials/instagram";
import { TiktokIcon } from "assets/images/icons/socials/tiktok";
import { YoutubeIcon } from "assets/images/icons/socials/youtube";

const FooterComponent = () => {
  const classes = useFooterStyles();
  const translate = useLocalization();

  return (
    <footer className={classes.footer}>
      <div className={classes.inner}>
        <div className={classes.logoWrap}>
          <ShekiCityLogo width={60} height={60} />
          <span className={classes.logoText}>Sheki City</span>
        </div>

        <nav className={classes.links}>
          <NavLink to={Routes.klubHaqqinda} className={classes.link}>
            {translate("klub_haqqinda")}
          </NavLink>
          <NavLink to={Routes.vakansiyalar} className={classes.link}>
            {translate("vakansiyalar")}
          </NavLink>
          <NavLink to={Routes.iane} className={classes.link}>
            {translate("iane")}
          </NavLink>
          <NavLink to={Routes.xeberler} className={classes.link}>
            {translate("xeberler")}
          </NavLink>
          <NavLink to={Routes.canliOyunlar} className={classes.link}>
            {translate("canli_oyunlar")}
          </NavLink>
        </nav>

        <div className={classes.divider} />

        <div className={classes.socials}>
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noreferrer"
            className={classes.socialLink}
          >
            <FacebookIcon width={28} height={28} />
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noreferrer"
            className={classes.socialLink}
          >
            <InstagramIcon width={28} height={28} />
          </a>
          <a
            href="https://tiktok.com"
            target="_blank"
            rel="noreferrer"
            className={classes.socialLink}
          >
            <TiktokIcon width={28} height={28} />
          </a>
          <a
            href="https://youtube.com"
            target="_blank"
            rel="noreferrer"
            className={classes.socialLink}
          >
            <YoutubeIcon width={28} height={28} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default FooterComponent;
