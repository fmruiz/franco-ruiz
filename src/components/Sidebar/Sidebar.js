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
  SidebarLink,
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
        <SidebarLink href="https://twitter.com/francoRuiz_" target="_blank">
          <FontAwesomeIcon icon={faTwitter} className="brand__icon" />
        </SidebarLink>
        <SidebarLink href="https://www.linkedin.com/in/francomruiz/" target="_blank">
          <FontAwesomeIcon icon={faLinkedin} className="brand__icon" />
        </SidebarLink>
        <SidebarLink href="https://github.com/fmruiz" target="_blank">
          <FontAwesomeIcon icon={faGithub} className="brand__icon" />
        </SidebarLink>
      </SidebarSocialContainer>
    </SidebarContainer>
  );
};
