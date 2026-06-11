import { createBrowserRouter } from 'react-router-dom';
import { Routes } from './routes';

import PublicComponent from 'core/layouts/public/public.component';
import AuthComponent from 'core/layouts/auth/auth.component';
import AuthProtectedComponent from './protected/auth-protected.component';

import HomeComponent from 'pages/home/home.component';
import OyunlarComponent from 'pages/oyunlar/oyunlar.component';
import OyunDetailComponent from 'pages/oyunlar/oyun-detail.component';
import CanliOyunlarComponent from 'pages/canli-oyunlar/canli-oyunlar.component';
import XeberlerComponent from 'pages/xeberler/xeberler.component';
import XeberDetailComponent from 'pages/xeberler/xeber-detail.component';
import KlubHaqqindaComponent from 'pages/klub-haqqinda/klub-haqqinda.component';
import KlubTarixiComponent from 'pages/klub-tarixi/klub-tarixi.component';
import NailiyyetlerComponent from 'pages/nailiyyetler/nailiyyetler.component';
import OyuncuProfiliComponent from 'pages/oyuncu-profili/oyuncu-profili.component';
import OyuncuDetailComponent from 'pages/oyuncu-profili/oyuncu-detail.component';
import VakansiyalarComponent from 'pages/vakansiyalar/vakansiyalar.component';
import VakansiyaDetailComponent from 'pages/vakansiyalar/vakansiya-detail.component';
import MehsullarComponent from 'pages/mehsullar/mehsullar.component';
import MehsulDetailComponent from 'pages/mehsullar/mehsul-detail.component';
import IaneComponent from 'pages/iane/iane.component';
import ForumComponent from 'pages/forum/forum.component';

import NotFoundComponent from 'pages/not-found/not-found.component';

const router = createBrowserRouter(
    [
        {
            element: (
                <AuthProtectedComponent layout='public'>
                    <PublicComponent />
                </AuthProtectedComponent>
            ),
            children: [
                { path: Routes.home,            element: <HomeComponent /> },
                // 1.
                { path: Routes.klubHaqqinda,    element: <KlubHaqqindaComponent /> },
                { path: Routes.klubTarixi,      element: <KlubTarixiComponent /> },
                { path: Routes.nailiyyetler,    element: <NailiyyetlerComponent /> },
                { path: Routes.oyuncuProfili,   element: <OyuncuProfiliComponent /> },
                { path: Routes.oyuncuDetail,    element: <OyuncuDetailComponent /> },
                { path: Routes.vakansiyalar,    element: <VakansiyalarComponent /> },
                { path: Routes.vakansiyaDetail, element: <VakansiyaDetailComponent /> },
                // 2.
                { path: Routes.oyunlar,         element: <OyunlarComponent /> },
                { path: Routes.oyunDetail,      element: <OyunDetailComponent/> },
                { path: Routes.canliOyunlar,    element: <CanliOyunlarComponent /> },
                { path: Routes.xeberler,        element: <XeberlerComponent /> },
                { path: Routes.xeberDetail,     element: <XeberDetailComponent /> },
                // 3.
                { path: Routes.mehsullar,       element: <MehsullarComponent /> },
                { path: Routes.mehsulDetail,    element: <MehsulDetailComponent /> },
                { path: Routes.iane,            element: <IaneComponent /> },
                { path: Routes.forum,           element: <ForumComponent /> },
            ],
        },
        {
            element: (
                <AuthProtectedComponent layout='auth'>
                    <AuthComponent />
                </AuthProtectedComponent>
            ),
            children: [
                { path: Routes.login, element: <></> },
            ],
        },
        {
            path: Routes.notFound,
            element: <NotFoundComponent />,
        },
    ],
    { basename: '/' },
);

export default router;