import React from "react";
import { Link } from "react-router-dom";
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
    { title: "Personal Projects", subtitle: "Personal goals", path: "personal" },
    { title: "Fenix Forward IT", subtitle: "Software factory", path: "fenix" },
  ];
  return (
    <WorkContainer>
      <LinkContainer>
        <LinkMain />
      </LinkContainer>
      <WorkItems>
        {workElements.map((w, i) => (
          <Link to={`/${w.path}`}>
            <WorkItemContainer key={i} className="work__item">
              <WorkItemTitle>{w.title}</WorkItemTitle>
              <WorkItemParagraph>{w.subtitle}</WorkItemParagraph>
            </WorkItemContainer>
          </Link>
        ))}
      </WorkItems>
    </WorkContainer>
  );
};
