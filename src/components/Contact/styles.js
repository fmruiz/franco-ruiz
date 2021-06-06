import styled from "styled-components";

export const ContactContainer = styled.div`
  background-color: #000000;
  display: flex;
  flex-direction: column;
`;

export const LinkContainer = styled.div`
  position: relative;

  .link {
    top: 60px;
    left: 75%;
  }
`;

export const ContactTitle = styled.h3`
  color: white;
  margin: 0;
  font-size: 80px;
  margin-top: 450px;
  margin-left: 200px;
`;

export const ContactContent = styled.div`
  margin-left: 200px;
  margin-top: 300px;
  width: 55%;
`;

export const ContactContentTitle = styled.h3`
  margin: 0;
  color: white;
  font-size: 60px;
`;

export const ContactContentSubTitle = styled.p`
  margin-bottom: 0;
  color: white;
  font-size: 30px;
`;

export const ContactContentParagraph = styled.p`
  margin-bottom: 0;
  color: white;
  font-size: 23px;
`;

export const ContactContentLinksContainer = styled.a`
  display: flex;
  flex-direction: column;
  margin-bottom: 300px;
`;

export const ContactContentLink = styled.a`
  margin-bottom: 0;
  color: #ff1744;
  font-size: 23px;
  text-decoration: none;
  margin-top: 23px;
  transition: all 0.5s;
  cursor: none;

  :hover {
    padding-left: 30px;
    transition: all 0.5s;
  }
`;