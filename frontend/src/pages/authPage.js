import React, { useContext, useRef, useState } from "react";
import Button from "react-bootstrap/Button";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { Context } from "..";

import { observer } from "mobx-react-lite";
import AuthService from "../service/AuthService";
import { REGISTRATION_ROUTE, TRACKING_ROUTER } from "../utils/consts";

const AuthPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const { store } = useContext(Context);

  const handleLogin = (e) => {
    e.preventDefault();
    store.login(email, password, navigate).then(() => {
      navigate(TRACKING_ROUTER);
    });
  };

  return (
    <form onSubmit={handleLogin}>
      <input
        onChange={(e) => setEmail(e.target.value)}
        value={email}
        type={email}
        placeholder="Email"
      />
      <br></br>
      <br></br>
      <input
        onChange={(e) => setPassword(e.target.value)}
        value={password}
        type={password}
        placeholder="Password"
      />
      <br></br>
      <br></br>

      {/* х**во работает */}

      <Button variant="outline-dark" type="submit">
        Войти
      </Button>

      <br></br>
      <br></br>
      <Link to="/authentication/registration">
        <Button variant="outline-dark">Регистрация</Button>
      </Link>

      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <h5>Maxim.Ivanchik@mail.ru</h5>
    </form>
  );
};
export default observer(AuthPage);
