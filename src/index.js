import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import store from "./redux/store";

const rerenderApp = () => {
  ReactDOM.render(
    <React.StrictMode>
      <App state={store.getState()} dispatch={store.dispatch.bind(store)} />
    </React.StrictMode>,
    document.getElementById("root")
  );
};

rerenderApp();
store.subscribe(rerenderApp);
