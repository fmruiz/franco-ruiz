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
  user-select: none;

  /* change about title */
  .change__about::after {
    content: "Hello.";
    transition: all 0.5s;
  }
  .change__about:hover:after {
    content: "About";
    padding-left: 50px;
    transition: all 0.5s;
  }
  /* change work title */
  .change__work::after {
    content: "I am";
    transition: all 0.5s;
  }
  .change__work:hover:after {
    content: "Work";
    padding-left: 50px;
    transition: all 0.5s;
  }
  /* change contact title */
  .change__contact::after {
    content: "Franco";
    transition: all 0.5s;
  }
  .change__contact:hover:after {
    content: "Contact";
    padding-left: 50px;
    transition: all 0.5s;
  }
`;

export const MainTitle = styled.h1`
  width: 65%;
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
