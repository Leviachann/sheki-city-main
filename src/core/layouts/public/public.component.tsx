import NavbarComponent from './components/navbar/header-navbar.component';
import SideMenuComponent from './components/side-menu/left-menu.component';
import FooterComponent from './components/footer/footer.component';
import { LoginModal } from 'core/shared/modal/Loginmodal.component';
import { Outlet } from 'react-router-dom';
import { usePublicLayoutStyles } from './public.style';
import { useStore } from 'store/store.config';
import classNames from 'classnames';

const PublicComponent = () => {
    const classes = usePublicLayoutStyles();
    const sideMenu = useStore('sideMenu');

    const contentClasses = classNames({
        [classes.content]: true,
        [classes.shifted]: sideMenu,
    }); 

    return (
        <div className={classes.public}>
            <NavbarComponent />
            <SideMenuComponent isOpen={sideMenu} />
            <LoginModal />

            <div className={contentClasses}>
                <Outlet />
            </div>
            <FooterComponent/>
        </div>
    );
};

export default PublicComponent;