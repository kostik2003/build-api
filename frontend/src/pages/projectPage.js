import { Link } from "react-router-dom";
import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Collapse from "react-bootstrap/Collapse";

export default function ProjectPage() {
  const [open, setOpen] = useState(false);
  const [open1, setOpen1] = useState(false);

  return (
    <div className="App">
      <h3>ProjectPage</h3>

      <Button
        onClick={() => setOpen(!open)}
        aria-controls="example-collapse-text"
        aria-expanded={open}
        variant="outline-dark"
      >
        BluSvn
      </Button>
      <div style={{ minHeight: "150px" }}>
        <Collapse in={open} dimension="width">
          <div id="example-collapse-text">
            <Card body style={{ width: "700px" }}>
              Anim pariatur cliche reprehenderit, enim eiusmod high life
              accusamus terry richardson ad squid. Nihil anim keffiyeh
              helvetica, craft beer labore wes anderson cred nesciunt sapiente
              ea proident. asdfasdfasdf asdfasdfasd asdfasdfasdasdfasdf asdf
            </Card>
          </div>
        </Collapse>
      </div>
      <br></br>

      <Button
        onClick={() => setOpen1(!open1)}
        aria-controls="example-collapse-text"
        aria-expanded={open1}
        variant="outline-dark"
      >
        PetPassword
      </Button>
      <div style={{ minHeight: "150px" }}>
        <Collapse in={open1} dimension="width">
          <div id="example-collapse-text">
            <Card body style={{ width: "400px" }}>
              Anim pariatur cliche reprehenderit, enim eiusmod high life
              accusamus terry richardson ad squid. Nihil anim keffiyeh
              helvetica, craft beer labore wes anderson cred nesciunt sapiente
              ea proident. asdfasdfasdf asdfasdfasd asdfasdfasdasdfasdf asdf
            </Card>
          </div>
        </Collapse>
      </div>
      <br></br>

      <Button variant="outline-dark">BluSvn</Button>
      <Button variant="outline-dark">PetPassword</Button>
      <Button variant="outline-dark">HelloWorld</Button>
      <br></br>
      <br></br>

      <Link to="/tracking">
        <Button variant="outline-dark">назад</Button>
      </Link>
    </div>
  );
}
