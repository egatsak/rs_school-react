import { RouteProps } from "react-router-dom";
import AboutPage from "../../pages/AboutPage/AboutPage";
import FormPage from "../../pages/FormPage/FormPage";
import MainPage from "../../pages/MainPage/MainPage";
import NotFoundPage from "../../pages/NotFoundPage/NotFoundPage";

export enum AppRoutes {
  MAIN = "main",
  ABOUT = "about",
  FORM = "form",
  NOT_FOUND = "not_found",
}

export const RoutePath: Record<AppRoutes, string> = {
  [AppRoutes.MAIN]: "/",
  [AppRoutes.ABOUT]: "/about",
  [AppRoutes.FORM]: "/form",
  [AppRoutes.NOT_FOUND]: "*",
};

export const routeConfig: Record<AppRoutes, RouteProps> = {
  [AppRoutes.MAIN]: {
    path: RoutePath.main,
    element: <MainPage />,
  },
  [AppRoutes.ABOUT]: {
    path: RoutePath.about,
    element: <AboutPage />,
  },
  [AppRoutes.FORM]: {
    path: RoutePath.form,
    element: <FormPage />,
  },
  [AppRoutes.NOT_FOUND]: {
    path: RoutePath.not_found,
    element: <NotFoundPage />,
  },
};
