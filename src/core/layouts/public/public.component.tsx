import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import NavbarComponent from './components/navbar/header-navbar.component';
import SideMenuComponent from './components/side-menu/left-menu.component';
import FooterComponent from './components/footer/footer.component';
import { LoginModal } from 'core/shared/modal/Loginmodal.component';
import { Outlet } from 'react-router-dom';
import { usePublicLayoutStyles } from './public.style';
import { useStore } from 'store/store.config';
import { setUser } from 'store/store.reducer';
import axiosInstance from 'core/configs/axios.config';
import classNames from 'classnames';

const PublicComponent = () => {
    const classes = usePublicLayoutStyles();
    const sideMenu = useStore('sideMenu');
    const user = useStore('user');
    const dispatch = useDispatch();

    const contentClasses = classNames({
        [classes.content]: true,
        [classes.shifted]: sideMenu,
    }); 

    useEffect(() => {
        const initAuth = async () => {
            const localToken = localStorage.getItem('accessToken');
            if (!user) {
                try {
                    if (localToken) {
                        const profileResponse = await axiosInstance.get('user/me', {
                            headers: { Authorization: `Bearer ${localToken}` }
                        });
                        dispatch(setUser({ ...profileResponse.data, accessToken: localToken }));
                    } else {
                        const refreshResponse = await axiosInstance.post('user/refresh');
                        const { accessToken } = refreshResponse.data;
                        
                        const profileResponse = await axiosInstance.get('user/me', {
                            headers: { Authorization: `Bearer ${accessToken}` }
                        });
                        dispatch(setUser({ ...profileResponse.data, accessToken }));
                    }
                } catch (error) {
                    localStorage.removeItem('accessToken');
                    dispatch(setUser(null));
                }
            }
        };

        initAuth();
    }, [dispatch, user]);

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