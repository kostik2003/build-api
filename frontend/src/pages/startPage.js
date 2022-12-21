import React from "react";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import { observer } from "mobx-react-lite";

export default observer(function StartPage() {
  return (
    <div className="StartPage">
      <h3>StartPage</h3>
      <Link to="/authentication">
        <Button variant="outline-dark">Логин</Button>
      </Link>
      <Link to="/authentication/registration">
        <Button variant="outline-dark">Регистрация</Button>
      </Link>
    </div>
  );
});
