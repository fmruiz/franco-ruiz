import styled from "styled-components";

export const ContactContainer = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #1d1d1d;
  width: 93vw;
  margin-left: 7vw;
`;

export const ContactTitle = styled.h3`
  color: white;
  font-size: 90px;
  margin-left: 100px;
  margin-bottom: 0;
`;

export const ContactNumberTitle = styled.span`
  color: white;
  font-size: 30px;
`;

export const ContactParagraph = styled.p`
  text-align: justify;
  margin: 30px 0 0 0;
  color: white;
  font-size: 25px;
  width: 50%;
`;

export const ContactContent = styled.div`
  margin-bottom: 100px;
  margin-left: 165px;
`;

export const ContactSocialContainer = styled.div`
  margin-top: 30px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 200px;

  .contact__icon {
      font-size: 30px;
  }
`;

export const ContactSocialLinkContainer = styled.a`
  display: flex;
  align-items: center;
  text-decoration: none;
  color: white;
  transition: all 0.5s;
  :hover {
    color: #f50057;
    transition: all 0.5s;
  }
`;

export const ContactSocialLink = styled.a`
  text-decoration: none;
  padding-left: 20px;
`;
