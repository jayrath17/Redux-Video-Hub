import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore } from "redux";
import App from "./components/App";
import store from "./store/store";
ReactDOM.render(
  <Provider store={createStore(store)}>
    <App />
  </Provider>,
  document.getElementById("root")
);
