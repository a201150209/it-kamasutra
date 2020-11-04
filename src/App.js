import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import s from "./App.module.css";
import Header from "./Header/Header";
import Navigation from "./Navigation/Navigation";
import Profile from "./Content/Profile/Profile";
import DialogsContainer from "./Content/Dialogs/Dialogs.container";

function App() {
  return (
    <BrowserRouter>
      {/*Browser router используется один раз в приложении*/}
      <div className={s.App}>
        <Header />
        <div className={s.mainWrapper}>
          <Navigation />
          <Switch>
            <Route path="/profile">
              {/*Испольазование render????*/}
              <Profile />
            </Route>
            {/*чтобы указать точный путь, добавь exact: <Route exact path="/dialogs">*/}
            <Route path="/dialogs">
              <DialogsContainer />
            </Route>
          </Switch>
        </div>
        </div>
    </BrowserRouter>
  );
}

export default App;
