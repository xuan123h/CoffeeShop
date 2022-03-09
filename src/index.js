import { StrictMode } from "react";
import ReactDOM from "react-dom";
import App from "./App";
import React from "react";

import { Provider } from "react-redux";
import store from "../src/redux/store";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </StrictMode>,
  rootElement
);
