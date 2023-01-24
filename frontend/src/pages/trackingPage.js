import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import InputGroup from "react-bootstrap/InputGroup";
import Form from "react-bootstrap/Form";
import AuthService from "../service/AuthService";
import Calendar from "react-calendar";
import Modal from "react-bootstrap/Modal";
import "react-calendar/dist/Calendar.css";
// import Calendar from "@ericz1803/react-google-calendar";
import Dropdown from "react-bootstrap/Dropdown";
import { observer } from "mobx-react-lite";
import Table from "react-bootstrap/Table";
import { Context } from "..";
import Accordion from "react-bootstrap/Accordion";

const TrackingPage = () => {
  const dateTrack = new Date();
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [discriptionTrack, setdiscriptionTrack] = useState("");
  const [nextDayDiscription, setNextDayDiscription] = useState("");
  const [nameProject, setNameProject] = useState();
  const [calendare, setCalendare] = useState(dateTrack);
  const [trackings, setTracking] = useState([]);
  const [formFields, setFormFields] = useState([
    { name: "", discriptionTask: "", time: "", isComplite: "" },
  ]);

  const { project } = useContext(Context); //прокинуть функцию для получения всех элементов

  const { track } = useContext(Context);

  const handleFormChange = (event, index) => {
    let data = [...formFields];
    data[index][event.target.name] = event.target.value;
    setFormFields(data);
  };

  // const API_KEY = "YOUR_API_KEY"; кастомный календарь не работает
  // let calendars = [
  //   { calendarId: "YOUR_CALENDAR_ID" },
  //   {
  //     calendarId: "YOUR_CALENDAR_ID_2",
  //     color: "#B241D1", //optional, specify color of calendar 2 events
  //   },
  // ];

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

  const handleSubmit = (e) => {
    e.preventDefault();
    track.submit(
      discriptionTrack,
      nameProject,
      nextDayDiscription,
      calendare.toLocaleDateString(),
      formFields
    );
  };

  const getTasks = async () => {
    const response = await track.getAllTracking();
    setTracking(response.data);
    try {
    } catch (e) {
      console.log(e);
    }
  };

  const logout = () => {
    AuthService.logout();
    window.location.reload();
  };

  return (
    <>
      <br></br>
      <div className="App" onSubmit={handleSubmit}>
        <Form
          className="mb-4"
          style={{
            marginLeft: "100px",
            paddingRight: "100px",
          }}
        >
          <Button variant="dark" onClick={handleShow}>
            демо модэл
          </Button>

          <br></br>
          <br></br>
          <Table striped bordered hover variant="dark">
            <thead>
              <tr>
                <th>#</th>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Username</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>Mark</td>
                <td>Otto</td>
                <td>@mdo</td>
              </tr>
              <tr>
                <td>2</td>
                <td>Jacob</td>
                <td>Thornton</td>
                <td>@fat</td>
              </tr>
              <tr>
                <td>3</td>
                <td colSpan={2}>Larry the Bird</td>
                <td>@twitter</td>
              </tr>
            </tbody>
          </Table>
          <Accordion>
            <Accordion.Item onClick={() => getTasks()} eventKey="0">
              <Accordion.Header>BluSvn</Accordion.Header>
              <Accordion.Body>
                {trackings.map((tracking) => (
                  <div key={tracking.id}>
                    {tracking.calendare + `  `}
                    {tracking.discriptionTrack + `  `}
                    {tracking.nextDayDiscription + `  `}
                    {tracking.authorEmail + `  `}
                  </div>
                ))}
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
          <Modal style={{}} show={show} onHide={handleClose}>
            <Modal.Header closeButton>
              <Modal.Title>
                {" "}
                <h3>
                  {nameProject !== undefined
                    ? `${nameProject} `
                    : "Выберите проект"}
                </h3>
              </Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <Dropdown className="d-inline" autoClose="inside">
                <Dropdown.Toggle
                  id="dropdown-autoclose-inside"
                  variant="outline-dark"
                >
                  Выбор проекта
                </Dropdown.Toggle>

                <Dropdown.Menu variant="outline-dark">
                  <Dropdown.Item
                    onClick={(e) => setNameProject((e = "BluSvn"))}
                  >
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
                <InputGroup.Text id="basic-addon2">
                  Над чем работал
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
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={handleClose}>
                Close
              </Button>
              <Button variant="dark" onClick={handleClose}>
                Save Changes
              </Button>
            </Modal.Footer>
          </Modal>
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
