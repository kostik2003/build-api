import AuthPage from "./pages/authPage";
import AdminPage from "./pages/adminPage";
import trackingPage from "./pages/trackingPage";

import {
  ADMIN_ROUTE,
  REGISTRATION_ROUTE,
  TRACKING_ROUTER,
  AUTH_ROUTE,
} from "./utils/consts";
import RegisterPage from "./pages/registerPage";

export const publicRoutes = [
  {
    path: REGISTRATION_ROUTE,
    Component: RegisterPage,
  },
  {
    path: AUTH_ROUTE,
    Component: AuthPage,
  },
];

// export const authRoutes = [

// ];

export const privateRoutes = [
  {
    path: TRACKING_ROUTER,
    Component: trackingPage,
  },
  {
    path: ADMIN_ROUTE,
    Component: AdminPage,
  },
];
