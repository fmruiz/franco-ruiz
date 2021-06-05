import React from "react";
import { LinkMain } from "../LinkMain/LinkMain";
import {
  ContactContainer,
  ContactContent,
  ContactContentLink,
  ContactContentLinksContainer,
  ContactContentParagraph,
  ContactContentSubTitle,
  ContactContentTitle,
  ContactTitle,
  LinkContainer,
} from "./styles";

export const Contact = () => {
  const contactLinks = [
    { name: "Linkedin", url: "https://www.linkedin.com/in/francomruiz/" },
    { name: "Instagram", url: "https://www.instagram.com/francomruiz/" },
    { name: "Twitter", url: "https://twitter.com/francoRuiz_" },
  ];

  return (
    <ContactContainer>
      <LinkContainer>
        <LinkMain />
      </LinkContainer>
      <ContactTitle>
        Let's change the world.
        <br />
        The sky is the limit.
      </ContactTitle>
      <ContactContent>
        <ContactContentTitle>Contact</ContactContentTitle>
        <ContactContentSubTitle>
          I'm seeking out opportunities to collaborate with companies / agencies
          / individuals, not just work for them. I want to work with open-minded
          collaborators where egos are out of the equation.
        </ContactContentSubTitle>
        <ContactContentParagraph>
          Feel free to send me a message to talk on any of my social networks:
        </ContactContentParagraph>
        <ContactContentLinksContainer>
            {contactLinks.map((c, i) => (
            <ContactContentLink href={c.url} key={i} target="_blank">
                {c.name}
            </ContactContentLink>
            ))}
        </ContactContentLinksContainer>
      </ContactContent>
    </ContactContainer>
  );
};
