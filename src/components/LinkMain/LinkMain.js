import React from "react";
import { Link } from "react-router-dom";
import { LinkMainContainer, LinkMainName } from "./styles";

export const LinkMain = ({ color }) => (
  <LinkMainContainer className="link">
    <Link to="/">
      <LinkMainName
        className={color === "black" ? "black link__main" : "white link__main"}
      >
        franco.js
      </LinkMainName>
    </Link>
  </LinkMainContainer>
);
