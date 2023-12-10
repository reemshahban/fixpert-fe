import { lazy } from 'react';

// project import
import Loadable from 'components/Loadable';
import MinimalLayout from 'layout/MinimalLayout';

// render - login
const AuthLogin = Loadable(lazy(() => import('pages/authentication/Login')));
const AuthRegister = Loadable(lazy(() => import('pages/authentication/Register')));

//render landing
const LandingPage = Loadable(lazy(() => import('pages/authentication/landing')));
// ==============================|| AUTH ROUTING ||============================== //

const LoginRoutes = {
    path: '/',
    element: <MinimalLayout />,
    children: [
        {
            path: 'login',
            element: <AuthLogin />
        },
         {
            path: '/landing',
            element: <LandingPage />
        },
        {
            path: 'register',
            element: <AuthRegister />
        }
    ]
};

export default LoginRoutes;
