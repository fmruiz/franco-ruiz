import {
  faGithub,
  faLinkedin,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Link } from "react-router-dom";
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
    { name: "About", src: "about" },
    { name: "Experience", src: "experience" },
    { name: "Projects", src: "projects" },
    { name: "Skills", src: "skills" },
    { name: "Contact", src: "contact" },
    { name: "Blog", src: "blog" },
    { name: "Resume", src: "resume" },
  ];
  return (
    <SidebarContainer>
      <SidebarLogoContainer>
        <Link to="/">
          <SidebarLogoTitle>
            Franco
            <br />
            Ruiz
          </SidebarLogoTitle>
          <SidebarLogoSubTitle>Frontend Developer</SidebarLogoSubTitle>
        </Link>
      </SidebarLogoContainer>
      <SidebarItemsContainer>
        {sidebarElements.map((s, i) => (
          <Link to={`/` + s.src}>
            <SidebarItems key={i} className="main__section">
              {s.name}
            </SidebarItems>
          </Link>
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
