import React, { useContext, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter } from "react-router-dom";
import { observer } from "mobx-react-lite";
import AppRouter from "./component/AppRouter";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import GetCookie from "./hooks/getCookie";
import { Context } from ".";

const App = () => {
  const { store } = useContext(Context);

  useEffect(() => {
    if (GetCookie("ursin")) {
      store.checkAuth();
    }
  }, []);

  return (
    <BrowserRouter>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="/etacer">EtaCar</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/authentication">Auth</Nav.Link>
            <Nav.Link href="/authentication/registration">
              Registration
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      <h1>{store.isAuth ? ` ${store.email}  ` : "Авторизауйтесь"}</h1>
      <AppRouter />
    </BrowserRouter>
  );
};

export default observer(App);
