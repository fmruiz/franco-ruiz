import styled from "styled-components";

export const LinkMainContainer = styled.div`
  position: absolute;

  a {
      text-decoration: none;
  }
  .link__main:hover:after {
    content: "Dev";
  }
`;

export const LinkMainName = styled.div`
  margin: 0;
  color: white;
  font-weight: bold;
  font-size: 30px;
`;
