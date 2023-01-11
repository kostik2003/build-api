import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Navigate } from "react-router-dom";
import { useContext } from "react";
import { Routes, Route } from "react-router-dom";
import { privateRoutes, publicRoutes } from "../routes";
import { Context } from "..";
import { observer } from "mobx-react-lite";
import { START_ROUTER } from "../utils/consts";

const AppRouter = () => {
  const { store } = useContext(Context);

  return (
    <Routes>
      {publicRoutes.map(({ path, Component }) => (
        <Route key={path} path={path} element={<Component />} exact />
      ))}
      {store.isAuth &&
        privateRoutes.map(({ path, Component }) => (
          <Route key={path} path={path} element={<Component />} exact />
        ))}
      {/* {<Route key={path} path={path} element={<Component />} />} */}

      {/* <Route path="*" element={<Navigate to={START_ROUTER} replace />} /> */}
    </Routes>
  );
};
export default observer(AppRouter);
