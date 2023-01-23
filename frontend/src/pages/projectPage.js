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
            {trackings.map((tracking) => (
              <div key={tracking.id}>
                {tracking.calendare}
                {tracking.discriptionTrack + `  `}
                {tracking.nextDayDiscription + `  `}
                {tracking.projectName + `  `}
              </div>
            ))}
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
            {trackings.map((tracking) => (
              <div key={tracking.id}>
                {tracking.calendare}
                {tracking.discriptionTrack + `  `}
                {tracking.nextDayDiscription + `  `}
                {tracking.projectName + `  `}
              </div>
            ))}
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
