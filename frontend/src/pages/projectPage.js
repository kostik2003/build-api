import { Link } from "react-router-dom";
import React, { useContext, useState } from "react";
import Button from "react-bootstrap/Button";
import Accordion from "react-bootstrap/Accordion";
import { Context } from "..";
import Table from "react-bootstrap/Table";
import { MDBTable, MDBTableBody, MDBTableHead } from "mdbreact";

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
            <MDBTable scrollY>
              <MDBTableHead>
                <tr className="table-dark">
                  <th>Дата</th>
                  <th>Описание Трэка</th>
                  <th>План на следующий день</th>
                  <th>Автор</th>
                </tr>
              </MDBTableHead>
              <MDBTableBody>
                <tr className="table-dark">
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
                      <Link to={tracking.authorEmail} key={tracking.id}>
                        {tracking.authorEmail}
                      </Link>
                    ))}
                  </td>
                </tr>
              </MDBTableBody>
            </MDBTable>
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item
          onClick={(e) => getTasks((e = "PetPassword"))}
          eventKey="1"
        >
          <Accordion.Header>PetPasport</Accordion.Header>
          <Accordion.Body>
            <Table striped bordered hover variant="dark">
              <thead>
                <tr>
                  <th>Дата</th>
                  <th>Описание задачи</th>
                  <th>План на следующий день</th>
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
