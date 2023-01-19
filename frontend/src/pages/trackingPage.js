import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import InputGroup from "react-bootstrap/InputGroup";
import Form from "react-bootstrap/Form";
import AuthService from "../service/AuthService";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import Dropdown from "react-bootstrap/Dropdown";
import { observer } from "mobx-react-lite";
import { Context } from "..";

const TrackingPage = () => {
  const [discriptionTrack, setdiscriptionTrack] = useState("");
  const [nextDayDiscription, setNextDayDiscription] = useState("");
  const [nameProject, setNameProject] = useState();
  const [calendare, setCalendare] = useState(new Date());
  const [formFields, setFormFields] = useState([
    { name: "", discriptionTask: "", time: "", isComplite: "" },
  ]);

  const handleFormChange = (event, index) => {
    let data = [...formFields];
    data[index][event.target.name] = event.target.value;
    setFormFields(data);
  };

  const addFields = () => {
    let object = {
      name: "",
      discriptionTask: "",
      time: "",
      isComplite: "",
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
      discriptionTrack,
      nameProject,
      nextDayDiscription,
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
          <h3>
            {nameProject !== undefined ? `${nameProject} ` : "Выберите проект"}
          </h3>
          <Dropdown className="d-inline" autoClose="inside">
            <Dropdown.Toggle
              id="dropdown-autoclose-inside"
              variant="outline-dark"
            >
              Выбор проекта
            </Dropdown.Toggle>

            <Dropdown.Menu variant="outline-dark">
              <Dropdown.Item onClick={(e) => setNameProject((e = "BluSvn"))}>
                BluSvn
              </Dropdown.Item>

              <Dropdown.Item
                onClick={(e) => setNameProject((e = "PetPassword"))}
              >
                PetPassword
              </Dropdown.Item>
              <Dropdown.Item
                onClick={(e) => setNameProject((e = "HellowWorld"))}
              >
                HellowWorld
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
          <br></br>
          <br></br>
          <InputGroup className="mb-3">
            <Form.Control
              onChange={(e) => setdiscriptionTrack(e.target.value)}
              value={discriptionTrack}
              type={discriptionTrack}
              placeholder="описать вручную"
              aria-label="Recipient's username"
              aria-describedby="basic-addon2"
            />
            <InputGroup.Text id="basic-addon2">Над чем работал</InputGroup.Text>
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

          {formFields.map((form, index) => {
            return (
              <div key={index}>
                <InputGroup className="mb-3">
                  <Form.Control
                    name="name"
                    placeholder="Название"
                    onChange={(event) => handleFormChange(event, index)}
                    value={form.name}
                  />
                  <InputGroup.Text id="basic-addon2">
                    Название таски
                  </InputGroup.Text>
                </InputGroup>
                <InputGroup className="mb-3">
                  <Form.Control
                    name="discriptionTask"
                    placeholder="что было сделано"
                    onChange={(event) => handleFormChange(event, index)}
                    value={form.discriptionTask}
                  />
                  <InputGroup.Text id="basic-addon2">
                    Описание таски
                  </InputGroup.Text>
                </InputGroup>
                <InputGroup className="mb-3">
                  <Form.Control
                    name="time"
                    placeholder="в часах"
                    onChange={(event) => handleFormChange(event, index)}
                    value={form.time}
                  />
                  <InputGroup.Text id="basic-addon2">
                    Затраченное время
                  </InputGroup.Text>
                </InputGroup>
                <InputGroup className="mb-3">
                  <Form.Control
                    name="isComplite"
                    placeholder="Да/Нет"
                    onChange={(event) => handleFormChange(event, index)}
                    value={form.isComplite}
                  />
                  <InputGroup.Text id="basic-addon2">
                    Выполнено?
                  </InputGroup.Text>
                </InputGroup>
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
