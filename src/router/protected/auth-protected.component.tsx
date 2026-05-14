import { Navigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { Routes } from '../routes';
import { IAuthProtectedRouteProps } from './auth-protected.d';
import { getToken } from 'core/helpers/get-token';
import { useEffect } from 'react';
import { setUser } from 'store/store.reducer';
import { IUser } from 'store/store.d';
import jwtDecode from 'jwt-decode';

const AuthProtectedComponent = ({
  children,
  layout = 'public',
}: IAuthProtectedRouteProps) => {
  const dispatch = useDispatch();

  useEffect(() => {
    const token = getToken();
    if (token) {
      try {
        const decoded = jwtDecode<IUser>(token);
        dispatch(setUser(decoded));
      } catch (_e) {
        // ignore
      }
    }
  }, [dispatch]);

  switch (layout) {
    case 'auth':
      return getToken() ? <Navigate to={Routes.home} replace /> : children;
    case 'public':
      return children;
    default:
      return children;
  }
};

export default AuthProtectedComponent;
