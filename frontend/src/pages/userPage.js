import React, { useContext, useEffect, useState } from "react";
import { observer } from "mobx-react-lite";
import { Context } from "..";
const UserPage = () => {
  const { users } = useContext(Context);

  useEffect(() => {
    getAllInfoUser();
  }, []);

  const getAllInfoUser = () => {
    users.resInfoWithUniqueUser();
  };

  return (
    <div className="App">
      <h3>UserPage</h3>
    </div>
  );
};
export default observer(UserPage);
