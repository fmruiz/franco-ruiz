import React from "react";
import { Main } from "./components/Main/Main";
import { Sidebar } from "./components/Sidebar/Sidebar";
import { AppContainer } from "./styles";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { About } from "./components/About/About";
import { Experience } from "./components/Experience/Experience";

export const App = () => (
  <Router>
    <AppContainer>
      <Sidebar />
      <Switch>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/experience">
          <Experience />
        </Route>
        <Route path="/">
          <Main />
        </Route>
      </Switch>
    </AppContainer>
  </Router>
);
