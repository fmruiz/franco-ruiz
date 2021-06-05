import styled from "styled-components";

export const MainContainer = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: #000000;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  overflow: hidden;

  /* change about title */
  .change__about::after {
    content: "Hello.";
  }
  .change__about:hover:after {
    content: "About";
  }
  /* change work title */
  .change__work::after {
    content: "I am";
  }
  .change__work:hover:after {
    content: "Work";
  }
  /* change contact title */
  .change__contact::after {
    content: "Franco";
  }
  .change__contact:hover:after {
    content: "Contact";
  }
`;

export const MainTitle = styled.h1`
  width: 60%;
  margin: 0 auto;
  line-height: 200px;
`;

export const FirstWord = styled.div`
  font-size: 190px;
  color: white;
  margin: 0 auto;
`;

export const SecondWord = styled.div`
  font-size: 190px;
  color: yellow;
  margin: 0 auto;
`;

export const ThirdWord = styled.div`
  font-size: 190px;
  color: yellow;
  margin: 0 auto;
`;

export const MainImage = styled.img`
  position: absolute;
  height: 100%;
  left: 58%;
`;
