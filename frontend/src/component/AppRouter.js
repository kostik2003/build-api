import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Navigate } from "react-router-dom";
import { useContext } from "react";
import { Routes, Route } from "react-router-dom";
import { privateRoutes, publicRoutes } from "../routes";
import { Context } from "..";
import { observer } from "mobx-react-lite";
import { AUTH_ROUTE, START_ROUTER, TRACKING_ROUTER } from "../utils/consts";

const AppRouter = () => {
  const { store } = useContext(Context);

  // console.log(store.isAuth);

  return (
    <Routes>
      {publicRoutes.map(({ path, Component }) => (
        <Route key={path} path={path} element={<Component />} exact />
      ))}
      {store.isAuth &&
        privateRoutes.map(({ path, Component }) => (
          <Route key={path} path={path} element={<Component />} exact />
        ))}
      {store.isAuth ? (
        <Route path="/" element={<Navigate to={TRACKING_ROUTER} replace />} />
      ) : (
        <Route path="/" element={<Navigate to={AUTH_ROUTE} replace />} />
      )}
      {/* {<Route key={path} path={path} element={<Component />} />} */}
    </Routes>
  );
};
export default observer(AppRouter);
