import React from "react";
import { Main } from "./components/Main/Main";
import { About } from "./components/About/About";
import { Work } from "./components/Work/Work";
import { Contact } from "./components/Contact/Contact";
import { Fenix } from "./components/Fenix/Fenix";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

export const App = () => (
  <Router>
    <Switch>
      <Route path="/about">
        <About />
      </Route>
      <Route path="/work">
        <Work />
      </Route>
      <Route exact path="/fenix">
        <Fenix />
      </Route>
      <Route path="/contact">
        <Contact />
      </Route>
      <Route path="/">
        <Main />
      </Route>
    </Switch>
  </Router>
);
