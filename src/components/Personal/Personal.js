import React from "react";
import {
  PersonalContainer,
  PersonalContent,
  PersonalImg,
  PersonalImgCompany,
  PersonalLogoContainer,
  PersonalNumberTitle,
  PersonalParagraph,
  PersonalSubtitle,
  PersonalSubtitleContainer,
  PersonalSubtitleImg,
  PersonalTitle,
} from "./styles";
import DiscordLogo from "../../assets/discord-logo.jpg";
import Discordv1 from "../../assets/discordv1.png";
import Discordv2 from "../../assets/discordv2.png";
import Discordv3 from "../../assets/discordv3.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faExternalLinkAlt } from "@fortawesome/free-solid-svg-icons";

export const Personal = () => {
  const PersonalProjects = [
    {
      logo: DiscordLogo,
      subtitle: "Discord Clone",
      textOne:
        "One of the applications that I use the most in my day to day is Discord, it allows me to share with friends, do pair programming, and communicate quickly with coworkers.",
      textTwo:
        "I decided to clone the UI of this application using technologies such as Javascript, ReactJS, Styled-Components, Redux, NodeJS, REST API, Vercel to deploy.",
      projects: {
        imgOne: Discordv1,
        imgTwo: Discordv2,
        imgThree: Discordv3,
      },
    },
  ];
  return (
    <PersonalContainer>
      <PersonalTitle>
        <PersonalNumberTitle>03 - </PersonalNumberTitle>
        Personal Projects
      </PersonalTitle>
      {PersonalProjects.map((p, i) => (
        <PersonalContent>
          <PersonalSubtitleContainer>
            <PersonalSubtitleImg>
              <PersonalImgCompany src={p.logo} />
              <PersonalSubtitle>{p.subtitle}</PersonalSubtitle>
            </PersonalSubtitleImg>
            <PersonalLogoContainer>
              <FontAwesomeIcon icon={faGithub} className="personal__icons" />
              <FontAwesomeIcon
                icon={faExternalLinkAlt}
                className="personal__icons"
              />
            </PersonalLogoContainer>
          </PersonalSubtitleContainer>
          <PersonalParagraph>{p.textOne}</PersonalParagraph>
          <PersonalParagraph>{p.textTwo}</PersonalParagraph>
          <PersonalImg src={p.projects.imgOne} />
          <PersonalImg src={p.projects.imgTwo} />
          <PersonalImg src={p.projects.imgThree} />
        </PersonalContent>
      ))}
    </PersonalContainer>
  );
};
