import React, { useContext, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter } from "react-router-dom";
import { Routes, Route, Navigate } from "react-router-dom";
import { privateRoutes, publicRoutes } from "./routes";
import { Context } from ".";
import { observer } from "mobx-react-lite";
import AuthPage from "./pages/authPage";
import RegisterPage from "./pages/registerPage";
import TrackingPage from "./pages/trackingPage";
import { AUTH_ROUTE } from "./utils/consts";

const App = () => {
  const { store } = useContext(Context);
  useEffect(() => {
    if (localStorage.getItem("token")) {
      store.checkAuth();
    }
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        {publicRoutes.map(({ path, Component }) => (
          <Route
            key={path}
            path={path}
            element={<Component />} //разлогинивает и редиректит на одну и ту же страницу.
            exact
          />
        ))}
        {store.isAuth &&
          privateRoutes.map(({ path, Component }) => (
            <Route key={path} path={path} element={<Component />} exact />
          ))}
        <Route path="*" element={<Navigate to={AUTH_ROUTE} replace />} />
      </Routes>
    </BrowserRouter>
  );
};

export default observer(App);
