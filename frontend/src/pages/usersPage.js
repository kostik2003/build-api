import React, { useContext, useEffect, useState } from "react";
import { observer } from "mobx-react-lite";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Context } from "..";

const UsersPage = () => {
  const [allUsers, setAllUsers] = useState([]);

  const { users } = useContext(Context);

  useEffect(() => {
    getUsers();
  }, []);

  const getUsers = async () => {
    const allUsers = await users.getUsers();
    setAllUsers(allUsers);
  };
  return (
    <div className="UsersPage">
      <h3>UsersPage</h3>
      {allUsers.map((user) => (
        <Card key={user.id} style={{ width: "18rem" }}>
          <Card.Body>
            <Card.Title>{user.email}</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
            <Button href={"/project/user/" + user.email} variant="dark">
              To User
            </Button>
          </Card.Body>
        </Card>
      ))}
    </div>
  );
};

export default observer(UsersPage);
