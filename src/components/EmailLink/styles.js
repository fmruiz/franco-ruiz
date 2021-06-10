import styled from "styled-components";

export const Container = styled.div`
  position: fixed;
  bottom: 170px;
  right: -50px;
  transform: rotate(90deg);
  display: block;
`;

export const EmailLinkContainer = styled.div`
  display: flex;
  align-items: center;
  ::after {
    content: "";
    width: 100px;
    height: 1px;
    background-color: white;
  }
`;

export const EmailLinkData = styled.a`
  text-decoration: none;
  color: white;
  letter-spacing: 3px;
  transition: all 0.5s;
  padding-right: 20px;
  :hover {
    color: #f50057;
    transition: all 0.5s;
  }
`;
