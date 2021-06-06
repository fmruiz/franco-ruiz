import React from "react";
import { LinkMain } from "../LinkMain/LinkMain";
import {
  FenixContainer,
  FenixContent,
  FenixContentImg,
  FenixContentParagraph,
  FenixContentSubTitle,
  FenixContentTitle,
  FenixImg,
  FenixSectionTitle,
  FenixSubTitle,
  FenixTitle,
  FenixTitleContainer,
  LinkContainer,
} from "./styles";
import FenixImage from "../../assets/fenix-dev.jpg";
import World from "../../assets/world.gif";
import Worldv1 from "../../assets/worldv1.png";
import Worldv2 from "../../assets/worldv2.png";
import Live from "../../assets/live.gif";
import Livev1 from "../../assets/livev1.png";
import Livev2 from "../../assets/livev2.png";

export const Fenix = () => (
  <FenixContainer>
    <LinkContainer>
      <LinkMain color="black" />
    </LinkContainer>
    <FenixTitleContainer>
      <FenixTitle>Fenix Forward IT</FenixTitle>
      <FenixSubTitle>Software Factory</FenixSubTitle>
    </FenixTitleContainer>
    <FenixImg src={FenixImage} />
    <FenixContent>
      <FenixContentTitle>Fenix Forward IT</FenixContentTitle>
      <FenixContentSubTitle>
        Founded in 2021, Fenix ​​is ​​a dream come true, a software factory
        startup with a team that always pushes forward, never one step back,
        always moving forward.
      </FenixContentSubTitle>
      <FenixContentParagraph>
        With +15 employees in charge of different tasks, the company develops
        pieces of software for different clients around the world.
      </FenixContentParagraph>
      <FenixContentParagraph>
        To achieve the objectives of the company we use the best practices,
        clean code, and the appropriate technologies for each situation.
      </FenixContentParagraph>
      <FenixSectionTitle>My role</FenixSectionTitle>
      <FenixContentParagraph>
        I was the first developer of the company, I worked very hard side by
        side with the CTO of the company. I saw the goals and objectives that
        the founders had, and their dream became my dream.
      </FenixContentParagraph>
      <FenixContentParagraph>
        My first position was as QA Automation using Cypress, it was a short
        experience. The next week I started as a Frontend Developer using
        Javascript, React, Redux, and SCSS for an online education platform.
      </FenixContentParagraph>
      <FenixContentParagraph>
        I participated in a finance project in real time via streaming. The
        project showed cryptocurrency values, stock prices of the main companies
        in the world, and a calendar of the main events of these companies.
      </FenixContentParagraph>
      <FenixContentParagraph>
        I had the opportunity to lead a project of world statistics in real time
        via streaming. Lots of information on different topics. Counting of
        births, deaths of people around the world, emails sent, publications on
        different social networks, etc. All this in real time.
      </FenixContentParagraph>
      <FenixContentParagraph>
        I am currently working as a Frontend Developer creating different pieces
        of software for a big project using technologies such as Javascript,
        Typescript, Styled Component, Storybooks, etc. Learning something new
        every day.
      </FenixContentParagraph>
    </FenixContent>
    <FenixContentImg src={World} />
    <FenixContentImg src={Worldv1} />
    <FenixContentImg src={Worldv2} />
    <FenixContentImg src={Live} />
    <FenixContentImg src={Livev2} />
    <FenixContentImg src={Livev1} />
  </FenixContainer>
);
