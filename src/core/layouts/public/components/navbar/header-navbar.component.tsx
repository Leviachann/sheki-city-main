import { NavLink } from "react-router-dom";
import { useDispatch } from "react-redux";
import { Routes } from "router/routes";
import { useNavbarStyles } from "./header-navbar.style";
import { useStore } from "store/store.config";
import { toggleSideMenu } from "store/store.reducer";
import useLocalization from "assets/lang";
import { ShekiCityLogo } from "assets/images/icons/sheki-city-logo";
import { LeftMenuToggle } from "assets/images/icons/left-menu-toggle";
const NavbarComponent = () => {
  const classes = useNavbarStyles();
  const dispatch = useDispatch();
  const user = useStore("user");
  const translate = useLocalization();

  const handleMenuToggle = () => {
    dispatch(toggleSideMenu());
  };

  return (
    <nav className={classes.navbar}>
      <div className={classes.inner}>
        <NavLink to={Routes.home} className={classes.logo}>
          <ShekiCityLogo width={60} height={60} />
          <span className={classes.logoLabel}>Sheki City</span>
        </NavLink>

        <ul className={classes.links}>
          <li>
            <NavLink to={Routes.klubHaqqinda}>
              {translate("klub_haqqinda")}
            </NavLink>
          </li>
          <li>
            <NavLink to={Routes.xeberler}>{translate("xeberler")}</NavLink>
          </li>
          <li>
            <NavLink to={Routes.vakansiyalar}>
              {translate("vakansiyalar")}
            </NavLink>
          </li>
          <li>
            <NavLink to={Routes.iane}>{translate("iane")}</NavLink>
          </li>
          <li>
            <NavLink to={Routes.canliOyunlar}>
              {translate("canli_oyunlar")}
            </NavLink>
          </li>
        </ul>

        <button className={classes.hamburger} onClick={handleMenuToggle}>
          <LeftMenuToggle />
        </button>
      </div>
    </nav>
  );
};

export default NavbarComponent;
