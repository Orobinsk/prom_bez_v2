import {RouteProps} from "react-router-dom";
import {LoginPageAsync} from "../../../pages/LoginPage";
import {NotFoundPage} from "../../../pages/NotFoundPage";
import {MainPageAsync} from "../../../pages/MainPage";
import {LearnPageAsync} from "../../../pages/learnPage";
import {SectionsPageAsync} from "../../../pages/SectionsPage";


export enum AppRoute {
    MAIN = 'main',
    // ABOUT = 'about',
    LEARN_PAGE = 'learn',
    LOGIN = 'login',
    SECTIONS = 'sections',
    NOT_FOUND = 'not_found',
}

export const RoutePatch: Record<AppRoute, string> = {
    [AppRoute.MAIN]: '/',
    // [AppRoute.ABOUT]: '/about',
    [AppRoute.LEARN_PAGE]: '/learn',
    [AppRoute.LOGIN]: '/login',
    [AppRoute.SECTIONS]: '/sections',
    // последний
    [AppRoute.NOT_FOUND]: '*',
};

export const routeConfig: Record<AppRoute, RouteProps> = {
    [AppRoute.MAIN]: {
        path: RoutePatch.main,
        element: <MainPageAsync/>,
    },
    // [AppRoute.ABOUT]: {
    //     path: RoutePatch.about,
    //     element: <About />,
    // },
    [AppRoute.LEARN_PAGE]: {
        path: RoutePatch.learn,
        element: <LearnPageAsync/>,
    },
    [AppRoute.LOGIN]: {
        path: RoutePatch.login,
        element: <LoginPageAsync/>,
    },
    [AppRoute.SECTIONS]: {
        path: RoutePatch.sections,
        element: <SectionsPageAsync/>,
    },
    [AppRoute.NOT_FOUND]: {
        path: RoutePatch.not_found,
        element: <NotFoundPage/>,
    },
};
