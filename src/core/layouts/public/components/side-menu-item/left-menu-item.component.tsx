import { ISideMenuItemProps } from '../../public';
import { useLeftMenuItemStyles } from './left-menu-item.style';
import { NavLink } from 'react-router-dom';

const LeftMenuItemComponent = ({ name, link, icon }: ISideMenuItemProps) => {
  const classes = useLeftMenuItemStyles();
  return (
    <li className={classes.item}>
      <NavLink className={classes.link} to={link}>
        <div className={classes.itemText}>
          <div className={classes.iconWrapper}>
            {icon}
          </div>
          <span>{name}</span>
        </div>
      </NavLink>
    </li>
  );
};

export default LeftMenuItemComponent;
