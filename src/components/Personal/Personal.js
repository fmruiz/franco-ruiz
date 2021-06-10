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
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faExternalLinkAlt } from "@fortawesome/free-solid-svg-icons";

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
        <PersonalLogoContainer>
          <FontAwesomeIcon icon={faGithub} className="personal__icons" />
          <FontAwesomeIcon
            icon={faExternalLinkAlt}
            className="personal__icons"
          />
        </PersonalLogoContainer>
      </PersonalSubtitleContainer>
    </PersonalContent>
  </PersonalContainer>
);
