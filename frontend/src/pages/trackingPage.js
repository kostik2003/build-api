import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import InputGroup from "react-bootstrap/InputGroup";
import Form from "react-bootstrap/Form";
import AuthService from "../service/AuthService";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import { observer } from "mobx-react-lite";
import { Context } from "..";

const TrackingPage = () => {
  const [gitSourse, setGitSourse] = useState("");
  const [discription, setDiscription] = useState("");
  const [target, setTarget] = useState("");
  const [nextDayDiscription, setNextDayDiscription] = useState("");
  const [workTime, setWorkTime] = useState("");
  const [reworked, setReworked] = useState("");
  const [calendare, setCalendare] = useState(new Date());

  const { track } = useContext(Context);

  const handleSubmit = (e) => {
    e.preventDefault();
    track.submit(
      gitSourse,
      discription,
      target,
      nextDayDiscription,
      workTime,
      reworked,
      calendare
    );
  };

  const logout = () => {
    AuthService.logout();
    window.location.reload();
  };

  return (
    <div className="App" onSubmit={handleSubmit}>
      <h3>trackingPage</h3>
      <Form
        className="mb-4"
        style={{
          marginLeft: "100px",
          paddingRight: "100px",
        }}
      >
        <InputGroup className="mb-3">
          <Form.Control
            onChange={(e) => setGitSourse(e.target.value)}
            value={gitSourse}
            type={gitSourse}
            placeholder="https://github.com/pull"
            aria-label="Recipient's username"
            aria-describedby="basic-addon2"
          />
          <InputGroup.Text id="basic-addon2">
            Ссылка на Pull Request
          </InputGroup.Text>
        </InputGroup>
        <InputGroup className="mb-3">
          <Form.Control
            onChange={(e) => setDiscription(e.target.value)}
            value={discription}
            type={discription}
            placeholder="описать вручную"
            aria-label="Recipient's username"
            aria-describedby="basic-addon2"
          />
          <InputGroup.Text id="basic-addon2">Над чем работал</InputGroup.Text>
        </InputGroup>

        <InputGroup className="mb-3">
          <Form.Control
            onChange={(e) => setTarget(e.target.value)}
            value={target}
            type={target}
            placeholder="Да/Нет"
            aria-label="Recipient's username"
            aria-describedby="basic-addon2"
          />
          <InputGroup.Text id="basic-addon2">Цель достигнута?</InputGroup.Text>
        </InputGroup>

        <InputGroup className="mb-3">
          <Form.Control
            onChange={(e) => setNextDayDiscription(e.target.value)}
            value={nextDayDiscription}
            type={nextDayDiscription}
            placeholder="описать вручную"
            aria-label="Recipient's username"
            aria-describedby="basic-addon2"
          />
          <InputGroup.Text id="basic-addon2">
            План на следующий день
          </InputGroup.Text>
        </InputGroup>

        <InputGroup className="mb-3">
          <Form.Control
            onChange={(e) => setWorkTime(e.target.value)}
            value={workTime}
            type={workTime}
            placeholder="поставить цифру в часах"
            aria-label="Recipient's username"
            aria-describedby="basic-addon2"
          />
          <InputGroup.Text id="basic-addon2">
            Отработанное время
          </InputGroup.Text>
        </InputGroup>

        <Form.Check
          type="switch"
          id="custom-switch"
          label="есть ли переработка"
          variant="outline-dark"
        />
        <InputGroup className="mb-3">
          <Form.Control
            onChange={(e) => setReworked(e.target.value)}
            value={reworked}
            type={reworked}
            placeholder="поставить цифру в часах"
            aria-label="Recipient's username"
            aria-describedby="basic-addon2"
          />
          <InputGroup.Text id="basic-addon2">
            переработанное время
          </InputGroup.Text>
        </InputGroup>
        <br></br>
        <Calendar
          onChange={setCalendare}
          value={calendare}
          variant="outline-dark"
        />
        <br></br>
        <Button variant="dark" type="submit">
          Отправить
        </Button>
      </Form>

      <br></br>
      <br></br>
      <Form className="calendare" style={{ marginLeft: "400" }}></Form>
      <br></br>
      <br></br>
      <Link to="/etacar">
        <Button onClick={logout} variant="outline-dark">
          Выйти
        </Button>
      </Link>
      <br></br>
      <br></br>
      <Link to="/admin">
        <Button variant="outline-dark">admin</Button>
      </Link>
    </div>
  );
};

export default observer(TrackingPage);
