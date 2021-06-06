import React from "react";
import { Main } from "./components/Main/Main";
import { About } from "./components/About/About";
import { Work } from "./components/Work/Work";
import { Contact } from "./components/Contact/Contact";
import { Fenix } from "./components/Fenix/Fenix";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import AnimatedCursor from "react-animated-cursor";
import { Personal } from "./components/Personal/Personal";

export const App = () => (
  <Router>
    <AnimatedCursor
      innerSize={8}
      outerSize={8}
      color="101, 31, 255"
      outerAlpha={0.5}
      innerScale={2}
      outerScale={5}
    />
    <Switch>
      <Route path="/about">
        <About />
      </Route>
      <Route path="/work">
        <Work />
      </Route>
      <Route exact path="/personal">
        <Personal />
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
