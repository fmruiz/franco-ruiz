import React from "react";
import {
  ExperienceContainer,
  ExperienceContent,
  ExperienceImg,
  ExperienceImgCompany,
  ExperienceNumberTitle,
  ExperienceParagraph,
  ExperiencePosition,
  ExperienceSubtitle,
  ExperienceSubtitleContainer,
  ExperienceSubtitleImg,
  ExperienceTitle,
} from "./styles";
import World from "../../assets/world.gif";
import Worldv1 from "../../assets/worldv1.png";
import Live from "../../assets/live.gif";
import Livev1 from "../../assets/livev1.png";
import FenixLogo from "../../assets/fenix-logo.jpg";

export const Experience = () => {
  const FenixImgs = [
    {
      logo: FenixLogo,
      subtitle: "Fenix Forward IT (2021)",
      position: "React Developer",
      textOne:
        "I was the first developer of the company, I worked very hard side by side with the CTO of the company. I saw the goals and objectives that the founders had, and their dream became my dream.",
      textTwo:
        "My first position was as QA Automation using Cypress, it was a short experience. The next week I started as a Frontend Developer using Javascript, React, Redux, and SCSS for an online education platform.",
      textThree:
        "I participated in a finance project in real time via streaming. The project showed cryptocurrency values, stock prices of the main companies in the world, and a calendar of the main events of these companies.",
      textFour:
        "I had the opportunity to lead a project of world statistics in real time via streaming. Lots of information on different topics. Counting of births, deaths of people around the world, emails sent, publications on different social networks, etc. All this in real time.",
      textFive:
        "I'm currently working as a Frontend Developer creating different pieces of software for a big project using technologies such as Javascript, Typescript, Styled Component, Storybooks, etc. Learning something new every day.",
      projects: {
        imgOne: World,
        imgTwo: Worldv1,
        imgThree: Live,
        imgFour: Livev1,
      },
    },
  ];
  return (
    <ExperienceContainer>
      <ExperienceTitle>
        <ExperienceNumberTitle>02 - </ExperienceNumberTitle>Experience
      </ExperienceTitle>
      {FenixImgs.map((f, i) => (
        <ExperienceContent key={i}>
          <ExperienceSubtitleContainer>
            <ExperienceSubtitleImg>
              <ExperienceImgCompany src={f.logo} />
              <ExperienceSubtitle>{f.subtitle}</ExperienceSubtitle>
            </ExperienceSubtitleImg>
            <ExperiencePosition>{f.position}</ExperiencePosition>
          </ExperienceSubtitleContainer>
          <ExperienceParagraph>{f.textOne}</ExperienceParagraph>
          <ExperienceParagraph>{f.textTwo}</ExperienceParagraph>
          <ExperienceParagraph>{f.textThree}</ExperienceParagraph>
          <ExperienceParagraph>{f.textFour}</ExperienceParagraph>
          <ExperienceParagraph>{f.textFive}</ExperienceParagraph>
          <ExperienceImg src={f.projects.imgOne} />
          <ExperienceImg src={f.projects.imgTwo} />
          <ExperienceImg src={f.projects.imgThree} />
          <ExperienceImg src={f.projects.imgFour} />
        </ExperienceContent>
      ))}
    </ExperienceContainer>
  );
};
