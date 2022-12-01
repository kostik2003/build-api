import AuthPage from "./pages/authPage";
import AdminPage from "./pages/adminPage";
import trackingPage from "./pages/trackingPage";
import {
  LOGIN_ROUTE,
  ADMIN_ROUTE,
  REGISTRATION_ROUTE,
  TRACKING_ROUTER,
} from "./utils/consts";
import { Component } from "react";

export const publicRoutes = [
  {
    path: LOGIN_ROUTE,
    Component: AuthPage,
  },
  {
    path: REGISTRATION_ROUTE,
    Component: AuthPage,
  },
  {
    path: ADMIN_ROUTE, //wqer
    Component: AdminPage,
  },
  {
    path: TRACKING_ROUTER,
    Component: trackingPage,
  },
];

export const authRoutes = [
  {
    path: ADMIN_ROUTE,
    Component: AdminPage,
  },
];

export const privateRoutes = [
  {
    path: TRACKING_ROUTER,
    Component: trackingPage,
  },
];
