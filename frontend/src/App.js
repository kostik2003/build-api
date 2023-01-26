import React, { useContext, useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, NavLink } from "react-router-dom";
import { observer } from "mobx-react-lite";
import AppRouter from "./component/AppRouter";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import { Context } from ".";
import GetCookie from "./Cookies/getCookie";

const App = () => {
  const { store } = useContext(Context);

  const [isdLoading, setIsdLoading] = useState(false);

  useEffect(() => {
    if (GetCookie("usrin")) {
      store.checkAuth();
    }
  }, []);

  if (store.isLoading) {
    return <div>Загрузка</div>;
  }

  console.log(store.isLoading);

  return (
    <BrowserRouter>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="/etacar">EtaCar</Navbar.Brand>
          <Nav className="me-auto">
            {store.isAuth ? (
              <Nav.Link href="/tracking">tracking</Nav.Link>
            ) : (
              <Nav.Link href="/authentication">Auth</Nav.Link>
            )}
            <Nav.Link href="/authentication/registration">
              Registration
            </Nav.Link>
            {store.isAuth ? <Nav.Link href="/project">Projects</Nav.Link> : ""}
          </Nav>
        </Container>
      </Navbar>
      <h1>{store.isAuth ? ` ${store.email}  ` : "Авторизауйтесь"}</h1>
      <AppRouter />
    </BrowserRouter>
  );
};

export default observer(App);
