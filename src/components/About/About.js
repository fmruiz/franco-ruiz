import React from "react";
import { LinkMain } from "../LinkMain/LinkMain";
import {
  AboutContainer,
  AboutContent,
  AboutContentParagraph,
  AboutContentSubTitle,
  AboutContentTitle,
  AboutTitle,
  LinkContainer,
} from "./styles";

export const About = () => (
  <AboutContainer>
    <LinkContainer>
      <LinkMain />
    </LinkContainer>
    <AboutTitle>
      I love the idea of creating pieces <br /> of software that help people
      <br />
      or just have fun using them.
    </AboutTitle>
    <AboutContent>
      <AboutContentTitle>About</AboutContentTitle>
      <AboutContentSubTitle>
        Hi, I'm Franco. I'am a Frontend Engineer passionate about new
        technologies, technological challenges and learning different ways to
        dealing with a problem.
      </AboutContentSubTitle>
      <AboutContentParagraph>
        I consider myself a hard working person. A person who is constantly
        learning new technologies and new ways of teamwork. I am totally
        convinced that teamwork is very important in any organization.
      </AboutContentParagraph>
      <AboutContentParagraph>
        I’m never satisfied to just come up with ideas. Instead I have an almost
        impulsive need to act on them. I’m easily inspired and more then willing
        to follow my fascinations wherever they take me.
      </AboutContentParagraph>
      <AboutContentParagraph>
        I’m a fast learner, able to pick up new skills and juggle different
        projects and roles with relative ease.
      </AboutContentParagraph>
      <AboutContentParagraph>
        I am too interested in meeting enterprising people to share stories,
        project ideas, successes and failures.
      </AboutContentParagraph>
      <AboutContentParagraph>
        You can read more about my biography, experience, skills, education and
        much more in the PDF attached bellow:
      </AboutContentParagraph>
    </AboutContent>
  </AboutContainer>
);
