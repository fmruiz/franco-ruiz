import {
  faGithub,
  faLinkedin,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import {
  SidebarContainer,
  SidebarItems,
  SidebarItemsContainer,
  SidebarLogoContainer,
  SidebarLogoSubTitle,
  SidebarLogoTitle,
  SidebarSocialContainer,
} from "./styles";

export const Sidebar = () => {
  const sidebarElements = [
    { name: "About" },
    { name: "Experience" },
    { name: "Projects" },
    { name: "Skills" },
    { name: "Contact" },
    { name: "Blog" },
    { name: "Resume" },
  ];
  return (
    <SidebarContainer>
      <SidebarLogoContainer>
        <SidebarLogoTitle>
          Franco
          <br />
          Ruiz
        </SidebarLogoTitle>
        <SidebarLogoSubTitle>Frontend Developer</SidebarLogoSubTitle>
      </SidebarLogoContainer>
      <SidebarItemsContainer>
        {sidebarElements.map((s, i) => (
          <SidebarItems key={i} className="main__section">{s.name}</SidebarItems>
        ))}
      </SidebarItemsContainer>
      <SidebarSocialContainer>
        <FontAwesomeIcon icon={faTwitter} className="brand__icon" />
        <FontAwesomeIcon icon={faLinkedin} className="brand__icon" />
        <FontAwesomeIcon icon={faGithub} className="brand__icon" />
      </SidebarSocialContainer>
    </SidebarContainer>
  );
};
