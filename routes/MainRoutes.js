import { lazy } from 'react';

// project import
import Loadable from 'components/Loadable';
import MainLayout from 'layout/MainLayout';

// render - dashboard
const DashboardDefault = Loadable(lazy(() => import('pages/dashboard')));

// render - sample page
const SamplePage = Loadable(lazy(() => import('pages/extra-pages/SamplePage')));

// render - utilities
const JoiningRequest = Loadable(lazy(() => import('pages/components-overview/JoiningRequest')));
const JoiningRequestDetailes = Loadable(lazy(() => import('pages/components-overview/JoiningRequestDetailes')));
const Services = Loadable(lazy(() => import('pages/components-overview/Services')));
const Captains = Loadable(lazy(() => import('pages/components-overview/Captains')));
const Workshops = Loadable(lazy(() => import('pages/components-overview/Workshops')));
const Sections = Loadable(lazy(() => import('pages/components-overview/Sections')));
const CaptainDetailes = Loadable(lazy(() => import('pages/components-overview/CaptainDetailes')));


// ==============================|| MAIN ROUTING ||============================== //

const MainRoutes = {
    path: '/',
    element: <MainLayout />,
    children: [
        {
            path: '/',
            element: <DashboardDefault />
        },
        {
            path: 'services',
            element: <Services />
        },
        {
            path: 'dashboard',
            children: [
                {
                    path: 'default',
                    element: <DashboardDefault />
                }
            ]
        },
        {
            path: 'sample-page',
            element: <SamplePage />
        },
        {
            path: 'captains',
            element: <Captains />
        },
        {
            path: 'workshops',
            element: <Workshops />
        },
        {
            path: 'joining-requests',
            element: <JoiningRequest />
        },
        {
            path: 'joining-request/:id',
            element: <JoiningRequestDetailes />
        },
        {
            path: 'captin/:id',
            element: <CaptainDetailes />
        },
        {
            path: 'sections',
            element: <Sections />
        }
    ]
};

export default MainRoutes;