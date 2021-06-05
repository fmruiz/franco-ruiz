import React from "react";
import { Link } from "react-router-dom";
import { LinkMainContainer, LinkMainName } from "./styles";

export const LinkMain = () => (
  <LinkMainContainer className="link">
    <Link to="/">
      <LinkMainName className="link__main">franco.</LinkMainName>
    </Link>
  </LinkMainContainer>
);
