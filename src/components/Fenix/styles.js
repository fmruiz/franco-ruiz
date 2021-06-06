const { default: styled } = require("styled-components");

export const FenixContainer = styled.div`
  background-color: white;
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

export const FenixTitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 450px;
  margin-left: 200px;
`;

export const FenixTitle = styled.h3`
  color: black;
  margin: 0;
  font-size: 80px;
`;

export const FenixSubTitle = styled.h3`
  color: gray;
  margin: 0;
  font-size: 25px;
`;

export const FenixImg = styled.img`
  width: 70%;
  margin-top: 250px;
`;

export const FenixContent = styled.div`
  margin: 300px auto 150px auto;
  width: 55%;
`;

export const FenixContentTitle = styled.h3`
  margin: 0;
  color: black;
  font-size: 60px;
`;

export const FenixContentSubTitle = styled.p`
  margin-bottom: 0;
  color: black;
  font-size: 30px;
`;

export const FenixContentParagraph = styled.p`
  margin-bottom: 0;
  color: black;
  font-size: 23px;
`;

export const FenixSectionTitle = styled.h3`
  margin-top: 150px;
  margin-bottom: 0;
  color: black;
  font-size: 50px;
`;

export const FenixContentImg = styled.img`
  width: 70%;
  margin: 0 auto 150px auto;
  border-radius: 5px;
  border: 1px solid gray;
`;
