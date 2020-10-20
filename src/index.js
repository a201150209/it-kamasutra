import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import reduxStore from "./redux/redux-store";

const rerenderApp = () => {
  ReactDOM.render(
    <React.StrictMode>
      <App
        state={reduxStore.getState()}
        dispatch={reduxStore.dispatch.bind(reduxStore)}
      />
    </React.StrictMode>,
    document.getElementById("root")
  );
};

rerenderApp();
reduxStore.subscribe(rerenderApp);
