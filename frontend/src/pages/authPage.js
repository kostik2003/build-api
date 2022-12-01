import React, { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import Form from "react-bootstrap/Form";

export default function AuthPage() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    async function load() {
      const res = await fetch("http://localhost:3001/login");
      const json = await res.json();
      setPosts(json);
    }
    load();
  }, []);

  return (
    <>
      <Form.Floating className="mb-3">
        <Form.Control
          id="floatingInputCustom"
          type="email"
          placeholder="name@example.com"
        />
        <label htmlFor="floatingInputCustom">Email address</label>
      </Form.Floating>
      <Form.Floating>
        <Form.Control
          id="floatingPasswordCustom"
          type="password"
          placeholder="Password"
        />
        <label htmlFor="floatingPasswordCustom">Password</label>
      </Form.Floating>
      <Button variant="outline-dark">Dark</Button>
    </>
  );
}
