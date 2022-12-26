import React, { createContext } from "react";
import ReactDOM from "react-dom/client";

import App from "./App";
import Store from "./store/store";
import Track from "./store/track";

const store = new Store();
const track = new Track();

export const Context = createContext({
  store,
  track,
});

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Context.Provider
    value={{
      store,
      track,
    }}
  >
    <App />
  </Context.Provider>
);
