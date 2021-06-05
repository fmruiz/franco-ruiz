import React from "react";
import { LinkMain } from "../LinkMain/LinkMain";
import {
  LinkContainer,
  WorkContainer,
  WorkItemContainer,
  WorkItemParagraph,
  WorkItems,
  WorkItemTitle,
} from "./styles";

export const Work = () => {
  const workElements = [
    { title: "Personal Projects", subtitle: "Personal goals" },
    { title: "Fenix Forward IT", subtitle: "Software factory" },
  ];

  return (
    <WorkContainer>
      <LinkContainer>
        <LinkMain />
      </LinkContainer>
      <WorkItems>
        {workElements.map((w, i) => (
          <WorkItemContainer key={i} className="work__item">
            <WorkItemTitle>{w.title}</WorkItemTitle>
            <WorkItemParagraph>{w.subtitle}</WorkItemParagraph>
          </WorkItemContainer>
        ))}
      </WorkItems>
    </WorkContainer>
  );
};
