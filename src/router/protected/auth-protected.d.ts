import { ReactElement } from 'react';

export interface IAuthProtectedRouteProps {
    children: ReactElement;
    layout?: 'public' | 'auth';
}