import React from "react";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";

export default function AdminPage() {
  return (
    <div className="App">
      <h3>AdminPage</h3>
      <br></br>
      <br></br>
      <Link to="/tracking">
        <Button variant="outline-dark">назад</Button>
      </Link>
    </div>
  );
}
