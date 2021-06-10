import React from "react";
import {
  PersonalContainer,
  PersonalContent,
  PersonalImgCompany,
  PersonalLogoContainer,
  PersonalNumberTitle,
  PersonalSubtitle,
  PersonalSubtitleContainer,
  PersonalSubtitleImg,
  PersonalTitle,
} from "./styles";
import DiscordLogo from "../../assets/discord-logo.jpg";

export const Personal = () => (
  <PersonalContainer>
    <PersonalTitle>
      <PersonalNumberTitle>03 - </PersonalNumberTitle>
      Personal Projects
    </PersonalTitle>
    <PersonalContent>
      <PersonalSubtitleContainer>
        <PersonalSubtitleImg>
          <PersonalImgCompany src={DiscordLogo} />
          <PersonalSubtitle>Discord Clone</PersonalSubtitle>
        </PersonalSubtitleImg>
        <PersonalLogoContainer></PersonalLogoContainer>
      </PersonalSubtitleContainer>
    </PersonalContent>
  </PersonalContainer>
);
