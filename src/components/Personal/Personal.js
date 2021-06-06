import React from "react";
import { LinkMain } from "../LinkMain/LinkMain";
import {
  LinkContainer,
  PersonalContainer,
  PersonalContent,
  PersonalContentImg,
  PersonalContentParagraph,
  PersonalContentSubTitle,
  PersonalContentTitle,
  PersonalImg,
  PersonalSectionTitle,
  PersonalSubTitle,
  PersonalTitle,
  PersonalTitleContainer,
} from "./styles";
import PersonalMain from "../../assets/personal.jpg";
import Discordv1 from "../../assets/discordv1.png";
import Discordv2 from "../../assets/discordv2.png";
import Discordv3 from "../../assets/discordv3.png";

export const Personal = () => (
  <PersonalContainer>
    <LinkContainer>
      <LinkMain color="black" />
    </LinkContainer>
    <PersonalTitleContainer>
      <PersonalTitle>Personal Projects</PersonalTitle>
      <PersonalSubTitle>Personal goals</PersonalSubTitle>
    </PersonalTitleContainer>
    <PersonalImg src={PersonalMain} />
    <PersonalContent>
      <PersonalContentTitle>Personal Projects</PersonalContentTitle>
      <PersonalContentSubTitle>
        I am a person who never stops learning new technologies, always seeking
        to be a better professional.
      </PersonalContentSubTitle>
      <PersonalContentParagraph>
        I like to create big personal projects, and I like to clone my favorite
        apps. I think this will lead me to create great products and have more
        creativity.
      </PersonalContentParagraph>
      <PersonalSectionTitle>Discord Clone</PersonalSectionTitle>
      <PersonalContentParagraph>
        One of the applications that I use the most in my day to day is Discord,
        it allows me to share with friends, do pair programming, and communicate
        quickly with coworkers.
      </PersonalContentParagraph>
      <PersonalContentParagraph>
        I decided to clone the UI of this application using technologies such as
        Javascript, ReactJS, Styled-Components, Framer-Motion, NodeJS, REST API,
        etc.
      </PersonalContentParagraph>
    </PersonalContent>
    <PersonalContentImg src={Discordv1} />
    <PersonalContentImg src={Discordv2} />
    <PersonalContentImg src={Discordv3} />
  </PersonalContainer>
);
