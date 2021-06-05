import React from "react";
import { Main } from "./components/Main/Main";
import { About } from "./components/About/About";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Work } from "./components/Work/Work";
import { Contact } from "./components/Contact/Contact";

export const App = () => (
  <Router>
    <Switch>
      <Route path="/about">
        <About />
      </Route>
      <Route path="/work">
        <Work />
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
