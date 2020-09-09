import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import s from "./App.module.css";
import Header from "./Header/Header";
import Navigation from "./Navigation/Navigation";
import Profile from "./Content/Profile/Profile";
import Dialogs from "./Content/Dialogs/Dialogs";

function App() {
  return (
    <BrowserRouter>
      <div className={s.App}>
        <Header />
        <Navigation />
        <Switch>
          <Route path="/profile">
            <Profile />
          </Route>
          <Route path="/dialogs">
            <Dialogs />
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
