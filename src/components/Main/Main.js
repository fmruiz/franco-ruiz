import React from "react";
import {
  FirstWord,
  MainContainer,
  MainImage,
  MainTitle,
  SecondWord,
  ThirdWord,
} from "./styles";
import MainImg from "../../assets/main.png";
import { Link } from "react-router-dom";

export const Main = () => (
  <MainContainer>
    <MainTitle>
      <Link to="/about">
        <FirstWord className="change__about"></FirstWord>
      </Link>
      <Link to="/work">
        <SecondWord className="change__work"></SecondWord>
      </Link>
      <Link to="/contact">
        <ThirdWord className="change__contact"></ThirdWord>
      </Link>
    </MainTitle>
    <MainImage src={MainImg} />
  </MainContainer>
);
