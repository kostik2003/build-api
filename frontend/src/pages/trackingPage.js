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
  const [isDisable, setDisable] = useState(false);
  const [calendare, setCalendare] = useState(new Date());

  const [formFields, setFormFields] = useState([{ task: "" }]);

  const handleFormChange = (event, index) => {
    let data = [...formFields];
    data[index][event.target.name] = event.target.value;
    setFormFields(data);
  };

  const submit = (e) => {
    e.preventDefault();
    console.log(formFields);
  };

  const addFields = () => {
    let object = {
      task: "",
    };

    setFormFields([...formFields, object]);
  };

  const removeFields = (index) => {
    let data = [...formFields];
    data.splice(index, 1);
    setFormFields(data);
  };

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
      calendare,
      formFields
    );
  };

  const logout = () => {
    AuthService.logout();
    window.location.reload();
  };

  return (
    <>
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
            <InputGroup.Text id="basic-addon2">
              Цель достигнута?
            </InputGroup.Text>
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
            checked={isDisable}
            onChange={(e) => setDisable(e.target.checked)}
          />

          <InputGroup className="mb-3">
            <Form.Control
              onChange={(e) => setReworked(e.target.value)}
              value={reworked}
              type={reworked}
              disabled={!isDisable}
              placeholder="поставить цифру в часах"
              aria-label="Recipient's username"
              aria-describedby="basic-addon2"
            />
            <InputGroup.Text id="basic-addon2">
              переработанное время
            </InputGroup.Text>
          </InputGroup>

          {formFields.map((form, index) => {
            return (
              <div key={index}>
                <Form.Control
                  name="task"
                  placeholder="Task"
                  onChange={(event) => handleFormChange(event, index)}
                  value={form.task}
                />
                <Button variant="dark" onClick={() => removeFields(index)}>
                  Remove
                </Button>
              </div>
            );
          })}
          <br />
          <br />

          <Button variant="dark" onClick={addFields}>
            Add More..
          </Button>
          <br />
          <br />
          <Calendar
            onChange={setCalendare}
            value={calendare}
            variant="outline-dark"
          />
          <br></br>
          <br />

          <Button variant="dark" type="submit">
            Отправить
          </Button>
        </Form>
      </div>
      <Form className="calendare" style={{ marginLeft: "400" }}></Form>

      <br />
      <br />
      <Form>
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
      </Form>
    </>
  );
};

export default observer(TrackingPage);
