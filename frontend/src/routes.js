import AuthPage from "./pages/authPage";
import AdminPage from "./pages/adminPage";
import trackingPage from "./pages/trackingPage";
import ProjectPage from "./pages/projectPage";
import UsersPage from "./pages/usersPage";

import {
  ADMIN_ROUTE,
  REGISTRATION_ROUTE,
  TRACKING_ROUTER,
  AUTH_ROUTE,
  START_ROUTER,
  PROJECT_ROUTER,
  USERS_ROUTER,
  USER_ROUTER,
} from "./utils/consts";
import RegisterPage from "./pages/registerPage";
import StartPage from "./pages/startPage";
import UserPage from "./pages/userPage";

export const publicRoutes = [
  {
    path: REGISTRATION_ROUTE,
    Component: RegisterPage,
  },
  {
    path: AUTH_ROUTE,
    Component: AuthPage,
  },
  {
    path: START_ROUTER,
    Component: StartPage,
  },
];

// export const adminRoutes = [
//   {
//     path: ADMIN_ROUTE,
//     Component: AdminPage,
//   },

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
  {
    path: PROJECT_ROUTER,
    Component: ProjectPage,
  },
  {
    path: USERS_ROUTER,
    Component: UsersPage,
  },
  {
    path: USER_ROUTER,
    Component: UserPage,
  },
];
