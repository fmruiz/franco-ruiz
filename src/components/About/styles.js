import styled from "styled-components";

export const AboutContainer = styled.div`
  /* width: 100vw;
  height: 100vh; */
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

export const AboutTitle = styled.h3`
  color: white;
  margin: 0;
  font-size: 80px;
  margin-top: 450px;
  margin-left: 200px;
`;

export const AboutContent = styled.div`
  margin-left: 200px;
  margin-top: 300px;
  width: 55%;
  margin-bottom: 300px;
`;

export const AboutContentTitle = styled.h3`
  margin: 0;
  color: white;
  font-size: 60px;
`;

export const AboutContentSubTitle = styled.p`
  margin-bottom: 0;
  color: white;
  font-size: 30px;
`;

export const AboutContentParagraph = styled.p`
  margin-bottom: 0;
  color: white;
  font-size: 23px;
  font-weight: 300;
`;
