import { memo } from 'react';
import { useDispatch } from 'react-redux';
import { Routes } from 'router/routes';
import { useStore } from 'store/store.config';
import { toggleSideMenu } from 'store/store.reducer';
import { useSideMenuStyles } from './left-menu.style';
import SideMenuItemComponent from '../side-menu-item/left-menu-item.component';
import { generateGuid } from 'core/helpers/generate-guid';
import classNames from 'classnames';
import useLocalization from 'assets/lang'; 

const SideMenuComponent = memo(({ isOpen }: { isOpen: boolean }) => {
    const classes = useSideMenuStyles();
    const dispatch = useDispatch();
    const user = useStore('user');
    const translate = useLocalization();

    const handleClose = () => {
        dispatch(toggleSideMenu());
    };

    const items = [
        {
            id: 1,
            name: translate('oyunlar'),
            link: Routes.oyunlar,
        },
        {
            id: 2,
            name: translate('oyuncu_profili'),
            link: Routes.oyuncuProfili,
        },
        {
            id: 3,
            name: translate('mehsul_satisi'),
            link: Routes.mehsullar,
        },
        {
            id: 4,
            name: translate('xeberler'),
            link: Routes.xeberler,
        },
        {
            id: 5,
            name: translate('forum'),
            link: Routes.forum,
        },
    ];

    const menuClasses = classNames({
        [classes.sideMenu]: true,
        [classes.open]: isOpen,
    });

    return (
        <>
            {isOpen && (
                <div className={classes.backdrop} onClick={handleClose} />
            )}

            <div className={menuClasses}>
                <div className={classes.menuHeader}>
                    <button className={classes.closeBtn} onClick={handleClose}>
                        <svg viewBox='0 0 24 24' fill='none' stroke='currentColor' strokeWidth='2'>
                            <line x1='18' y1='6' x2='6' y2='18' />
                            <line x1='6' y1='6' x2='18' y2='18' />
                        </svg>
                    </button>
                    <span className={classes.menuTitle}>{translate('menu')}</span>
                </div>

                <div className={classes.authRow}>
                    {user ? (
                        <div className={classes.userRow}>
                            <span className={classes.userName}>{user.full_name}</span>
                        </div>
                    ) : (
                        <div className={classes.loginRow}>
                            <span className={classes.loginText}>{translate('daxil_ol')}</span>
                        </div>
                    )}
                </div>

                <ul className={classes.list}>
                    {items.map((item) => (
                        <SideMenuItemComponent
                            key={generateGuid()}
                            name={item.name}
                            link={item.link}
                            icon={null}
                            submenu={null}
                        />
                    ))}
                </ul>
            </div>
        </>
    );
});

export default SideMenuComponent;