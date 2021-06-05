import React from "react";
import { Main } from "./components/Main/Main";
import { About } from "./components/About/About";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

export const App = () => (
  <Router>
    <Switch>
      <Route path="/about">
        <About />
      </Route>
      <Route path="/">
        <Main />
      </Route>
    </Switch>
  </Router>
);
