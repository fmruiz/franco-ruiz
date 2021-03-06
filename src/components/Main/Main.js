import React from "react";
import { EmailLink } from "../EmailLink/EmailLink";
import {
  MainButton,
  MainContainer,
  MainContent,
  MainSubTitle,
  MainTitle,
} from "./styles";

export const Main = () => (
  <MainContainer>
    <MainContent>
      <MainTitle>
        Hi, <br />
        I'm Franco, <br />
        Software Developer
      </MainTitle>
      <MainSubTitle>Frontend Developer</MainSubTitle>
      <MainButton>Contact!</MainButton>
    </MainContent>
    <EmailLink />
  </MainContainer>
);
