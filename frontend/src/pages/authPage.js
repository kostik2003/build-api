import React, { useContext, useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { Link } from "react-router-dom";
import { Context } from "..";
import { observer } from "mobx-react-lite";

const AuthPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { store } = useContext(Context);

  return (
    <Form>
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
      <Link to="/tracking">
        {/* хуёво работает */}
        <Button
          variant="outline-dark"
          onClick={() => store.login(email, password)}
        >
          Войти
        </Button>
      </Link>

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
    </Form>
  );
};
export default observer(AuthPage);
