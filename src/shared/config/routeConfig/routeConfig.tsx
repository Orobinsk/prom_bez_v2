import {RouteProps} from "react-router-dom";
import {LearnPage} from "../../../pages/learnPage";
import {HomePage} from "../../../pages/home";
import {NotFoundPage} from "../../../pages/notFound";



export enum AppRoute {
    MAIN = 'main',
    // ABOUT = 'about',
    LEARN_PAGE='learn',
    NOT_FOUND = 'not_found',
}

export const RoutePatch: Record<AppRoute, string> = {
    [AppRoute.MAIN]: '/',
    // [AppRoute.ABOUT]: '/about',
    [AppRoute.LEARN_PAGE]: '/learn',
    // последний
    [AppRoute.NOT_FOUND]: '*',
};

export const routeConfig: Record<AppRoute, RouteProps> = {
    [AppRoute.MAIN]: {
        path: RoutePatch.main,
        element: <HomePage />,
    },
    // [AppRoute.ABOUT]: {
    //     path: RoutePatch.about,
    //     element: <About />,
    // },
    [AppRoute.LEARN_PAGE]: {
        path: RoutePatch.learn,
        element: <LearnPage />,
    },
    [AppRoute.NOT_FOUND]: {
        path: RoutePatch.not_found,
        element: <NotFoundPage />,
    },
};
