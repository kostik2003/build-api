import React, { createContext } from "react";
import ReactDOM from "react-dom/client";
import { Route } from "react-router-dom";

import App from "./App";
import Project from "./store/project";
import Store from "./store/store";
import Track from "./store/track";

const store = new Store();
const track = new Track();
const project = new Project();

export const Context = createContext({
  store,
  track,
  project,
});

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Context.Provider
    value={{
      store,
      track,
      project,
    }}
  >
    <App />
  </Context.Provider>
);
