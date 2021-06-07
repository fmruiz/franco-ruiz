import React from "react";
import { Main } from "./components/Main/Main";
import { Sidebar } from "./components/Sidebar/Sidebar";
import { AppContainer } from "./styles";

export const App = () => (
  <AppContainer>
    <Sidebar />
    <Main />
  </AppContainer>
);
