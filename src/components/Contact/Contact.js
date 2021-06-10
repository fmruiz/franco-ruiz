import { faGithub, faLinkedin, faTwitter } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import {
  ContactContainer,
  ContactContent,
  ContactNumberTitle,
  ContactParagraph,
  ContactSocialContainer,
  ContactSocialLink,
  ContactSocialLinkContainer,
  ContactTitle,
} from "./styles";

export const Contact = () => (
  <ContactContainer>
    <ContactTitle>
      <ContactNumberTitle>04 - </ContactNumberTitle>
      Contact
    </ContactTitle>
    <ContactContent>
      <ContactParagraph>
        I'm seeking out opportunities to collaborate with companies / agencies /
        individuals, not just work for them. I want to work with open-minded
        collaborators where egos are out of the equation.
      </ContactParagraph>
      <ContactParagraph>
      Feel free to send me a message to talk on any of my social networks:
      </ContactParagraph>
      <ContactSocialContainer>
          <ContactSocialLinkContainer href="mailto:x.francoruiz@gmail.com">
            <FontAwesomeIcon icon={faEnvelope} className="contact__icon"/>
            <ContactSocialLink>x.francoruiz@gmail.com</ContactSocialLink>
          </ContactSocialLinkContainer>
          <ContactSocialLinkContainer href="https://github.com/fmruiz">
            <FontAwesomeIcon icon={faGithub} className="contact__icon"/>
            <ContactSocialLink>fmruiz</ContactSocialLink>
          </ContactSocialLinkContainer>
          <ContactSocialLinkContainer href="https://www.linkedin.com/in/francomruiz/">
            <FontAwesomeIcon icon={faLinkedin} className="contact__icon"/>
            <ContactSocialLink>francomruiz</ContactSocialLink>
          </ContactSocialLinkContainer>
          <ContactSocialLinkContainer href="https://twitter.com/francoRuiz_">
            <FontAwesomeIcon icon={faTwitter} className="contact__icon"/>
            <ContactSocialLink>@francoRuiz_</ContactSocialLink>
          </ContactSocialLinkContainer>
      </ContactSocialContainer>
    </ContactContent>
  </ContactContainer>
);
