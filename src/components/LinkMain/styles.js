import styled from "styled-components";

export const LinkMainContainer = styled.div`
  position: absolute;

  a {
      text-decoration: none;
  }
  .link__main {
    transition: all 0.5s;
  }
  .link__main:hover {
    padding-left: 30px;
    transition: all 0.5s;
  }
  .link__main:hover:after {
    /* content: "Dev"; */
  }
  .white {
    color: white;
  }
  .black {
    color: black;
  }
`;

export const LinkMainName = styled.div`
  margin: 0;
  font-weight: bold;
  font-size: 30px;
`;
