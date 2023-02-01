import React, { createContext } from "react";
import ReactDOM from "react-dom/client";
import { Route } from "react-router-dom";

import App from "./App";
import Project from "./store/project";
import Store from "./store/store";
import Track from "./store/track";
import User from "./store/users";

const store = new Store();
const track = new Track();
const project = new Project();
const users = new User();

export const Context = createContext({
  store,
  track,
  project,
  users,
});

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Context.Provider
    value={{
      store,
      track,
      project,
      users,
    }}
  >
    <App />
  </Context.Provider>
);
