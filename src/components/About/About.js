import React from "react";
import {
  AboutContainer,
  AboutContent,
  AboutNumberTitle,
  AboutParagraph,
  AboutTitle,
} from "./styles";

export const About = () => (
  <AboutContainer>
    <AboutTitle>
      <AboutNumberTitle>01 - </AboutNumberTitle>About
    </AboutTitle>
    <AboutContent>
      <AboutParagraph>
        Hi, I'm Franco. I'm a Frontend Engineer passionate about new
        technologies, technological challenges and learning different ways to
        dealing with a problem.
      </AboutParagraph>
      <AboutParagraph>
        I consider myself a hard working person. A person who is constantly
        learning new technologies and new ways of teamwork. I am totally
        convinced that teamwork is very important in any organization.
      </AboutParagraph>
      <AboutParagraph>
        I’m a fast learner, able to pick up new skills and juggle different
        projects and roles with relative ease.
      </AboutParagraph>
      <AboutParagraph>
        I'm too interested in meeting enterprising people to share stories,
        project ideas, successes and failures.
      </AboutParagraph>
      <AboutParagraph>
        You can read more about my biography, experience, skills, education and
        much more in the PDF attached bellow:
      </AboutParagraph>
    </AboutContent>
  </AboutContainer>
);
