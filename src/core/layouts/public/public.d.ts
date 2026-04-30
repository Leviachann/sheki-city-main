import { ReactElement } from 'react';

export interface ISideMenuItemProps {
    name: string | ReactElement;
    link: string;
    icon: ReactElement | null;
    submenu?: ISideMenuItemProps[] | null;
}