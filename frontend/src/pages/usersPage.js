import React, { useContext, useEffect, useState } from "react";
import { observer } from "mobx-react-lite";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Context } from "..";

const UsersPage = () => {
  const [allUsers, setAllUsers] = useState([]);
  const [infoUser, setInfoUsers] = useState();

  const { users } = useContext(Context);

  useEffect(() => {
    getUsers();
  }, []);

  //получение всех юзеров
  const getUsers = async () => {
    const allUsers = await users.getUsers();
    setAllUsers(allUsers);
  };

  //получение уникального пользователя
  // const reqUniqueUser = async (userEmail) => {
  //   const infoUser = await users.reqUniqueUser(userEmail);
  //   setInfoUsers(infoUser.data);
  // };

  return (
    <div className="UsersPage">
      <h3>UsersPage</h3>
      <div>
        {allUsers.map((user) => (
          <Card key={user.id} style={{ width: "18rem" }}>
            <Card.Body>
              <Card.Title>{user.email}</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>

              <Button
                href={"/project/user/:" + user.email}
                // onClick={(e) => reqInfoUnfoUniqueUser(user.email)}
                variant="dark"
              >
                To User
              </Button>
            </Card.Body>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default observer(UsersPage);
