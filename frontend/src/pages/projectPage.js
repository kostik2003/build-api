import { Link } from "react-router-dom";
import React, { useContext, useState } from "react";
import Button from "react-bootstrap/Button";
import Accordion from "react-bootstrap/Accordion";
import { Context } from "..";
import Table from "react-bootstrap/Table";

export default function ProjectPage() {
  const [trackings, setTracking] = useState([]);

  const { project } = useContext(Context);

  const getTasks = async (e) => {
    const response = await project.getAllToday(e);
    setTracking(response.data);
    try {
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <div className="App">
      <h3>ProjectPage</h3>
      <Accordion>
        <Accordion.Item onClick={(e) => getTasks((e = "BluSvn"))} eventKey="0">
          <Accordion.Header>BluSvn</Accordion.Header>
          <Accordion.Body>
            <Table striped bordered hover variant="dark">
              <thead>
                <tr>
                  <th>Дата</th>
                  <th>Описание задачи</th>
                  <th>Что будет делать следующим</th>
                  <th>Автор</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    {trackings.map((tracking) => (
                      <div key={tracking.id}>{tracking.calendare}</div>
                    ))}
                  </td>
                  <td>
                    {trackings.map((tracking) => (
                      <div key={tracking.id}>{tracking.discriptionTrack}</div>
                    ))}
                  </td>
                  <td>
                    {trackings.map((tracking) => (
                      <div key={tracking.id}>{tracking.nextDayDiscription}</div>
                    ))}
                  </td>
                  <td>
                    {trackings.map((tracking) => (
                      <div key={tracking.id}>{tracking.authorEmail}</div>
                    ))}
                  </td>
                </tr>
              </tbody>
            </Table>
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item
          onClick={(e) => getTasks((e = "PetPassword"))}
          eventKey="1"
        >
          <Accordion.Header>PetPassword</Accordion.Header>
          <Accordion.Body>
            <Table striped bordered hover variant="dark">
              <thead>
                <tr>
                  <th>Дата</th>
                  <th>Описание задачи</th>
                  <th>Что будет делать следующим</th>
                  <th>Автор</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    {trackings.map((tracking) => (
                      <div key={tracking.id}>{tracking.calendare}</div>
                    ))}
                  </td>
                  <td>
                    {trackings.map((tracking) => (
                      <div key={tracking.id}>{tracking.discriptionTrack}</div>
                    ))}
                  </td>
                  <td>
                    {trackings.map((tracking) => (
                      <div key={tracking.id}>{tracking.nextDayDiscription}</div>
                    ))}
                  </td>
                  <td>
                    {trackings.map((tracking) => (
                      <div key={tracking.id}>{tracking.authorEmail}</div>
                    ))}
                  </td>
                </tr>
              </tbody>
            </Table>
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
      <br></br>

      <Link to="/tracking">
        <Button variant="outline-dark">назад</Button>
      </Link>
    </div>
  );
}
