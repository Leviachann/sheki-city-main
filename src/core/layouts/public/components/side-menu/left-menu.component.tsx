import { memo, useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { Routes } from 'router/routes';
import { useStore } from 'store/store.config';
import { toggleSideMenu, setAuthModal } from 'store/store.reducer';
import { useSideMenuStyles } from './left-menu.style';
import SideMenuItemComponent from '../side-menu-item/left-menu-item.component';
import classNames from 'classnames';
import useLocalization from 'assets/lang';
import { ExitIcon } from 'assets/images/icons/exit';
import { ForumIcon, KlubTarixiIcon, MehsullarIcon, NailiyyetlerIcon, OyuncuProfiliIcon, OyunlarIcon, ProfileIcon, XeberlerIcon } from 'assets/images/icons/left-menu';

const SideMenuComponent = memo(({ isOpen }: { isOpen: boolean }) => {
  const classes = useSideMenuStyles();
  const dispatch = useDispatch();
  const user = useStore('user');
  const translate = useLocalization();

  const handleClose = () => {
    dispatch(toggleSideMenu());
  };
  const handleOpenLogin = useCallback(() => {
    dispatch(toggleSideMenu());
    dispatch(setAuthModal(true)); 
  }, [dispatch]);

  const items = [
    { id: 1, name: translate('oyunlar'), link: Routes.oyunlar, icon: <OyunlarIcon /> },
    { id: 2, name: translate('oyuncu_profili'), link: Routes.oyuncuProfili, icon: <OyuncuProfiliIcon /> },
    { id: 3, name: translate('mehsul_satisi'), link: Routes.mehsullar, icon: <MehsullarIcon/> },
    { id: 4, name: translate('xeberler'), link: Routes.xeberler, icon: <XeberlerIcon/> },
    { id: 5, name: translate('klub_tarixi'), link: Routes.klubTarixi, icon: <KlubTarixiIcon /> },
    { id: 6, name: translate('nailiyyetler'), link: Routes.nailiyyetler, icon: <NailiyyetlerIcon /> },
    { id: 7, name: translate('forum'), link: Routes.forum, icon: <ForumIcon /> },
  ];

  const menuClasses = classNames({
    [classes.sideMenu]: true,
    [classes.open]: isOpen,
  });

  return (
    <>
      {isOpen && <div className={classes.backdrop} onClick={handleClose} />}

      <div className={menuClasses}>
        <div className={classes.menuHeader}>
          <button className={classes.closeBtn} onClick={handleClose}>
            <ExitIcon />
          </button>
          <span className={classes.menuTitle}>{translate('menu')}</span>
        </div>

        <div className={classes.authRow}>
          {user ? (
            <div className={classes.userRow}>
              <div className={classes.authIcon}>
                <ProfileIcon/>
              </div>
              <span className={classes.userName}>{user.fullName}</span> 
            </div>
          ) : (
            <div className={classes.loginRow} onClick={handleOpenLogin} style={{ cursor: 'pointer' }}>
              <div className={classes.authIcon}>
                <ProfileIcon/>
              </div>
              <span className={classes.loginText}>{translate('daxil_ol')}</span>
            </div>
          )}
        </div>

        <ul className={classes.list}>
          {items.map((item) => (
            <SideMenuItemComponent
              key={item.id}
              name={item.name}
              link={item.link}
              icon={item.icon || null}
            />
          ))}
        </ul>
      </div>
    </>
  );
});

export default SideMenuComponent;