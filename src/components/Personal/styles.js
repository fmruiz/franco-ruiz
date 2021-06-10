import styled from "styled-components";

export const PersonalContainer = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #1d1d1d;
  width: 93vw;
  margin-left: 7vw;
`;

export const PersonalTitle = styled.h3`
  color: white;
  font-size: 90px;
  margin-left: 100px;
  margin-bottom: 0;
`;

export const PersonalNumberTitle = styled.span`
  color: white;
  font-size: 30px;
`;

export const PersonalSubtitle = styled.h5`
  margin: 0;
  color: white;
  font-size: 30px;
`;

export const PersonalParagraph = styled.p`
  text-align: justify;
  margin: 30px 0 0 0;
  color: white;
  font-size: 25px;
  width: 50%;
`;

export const PersonalImg = styled.img`
  margin: 30px 0 0 0;
  width: 50%;
  border-radius: 5px;
  border: 1px solid #282828;
`;

export const PersonalContent = styled.div`
  margin-bottom: 100px;
  margin-left: 165px;
`;

export const PersonalSubtitleContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 50%;
  margin-top: 80px;
  border-bottom: 1px solid lightgray;
  padding-bottom: 10px;
  align-items: center;
`;

export const PersonalSubtitleImg = styled.div`
  display: flex;
  align-items: center;
`;

export const PersonalImgCompany = styled.img`
  width: 50px;
  height: 50px;
  margin-right: 20px;
  border-radius: 5px;
  transition: all 0.5s;

  :hover {
    border-radius: 0px;
    transition: all 0.5s;
  }
`;

export const PersonalLogoContainer = styled.div`
  display: flex;

  .personal__icons {
    color: white;
    font-size: 30px;
    margin-left: 20px;
    transition: all 0.5s;
  }

  .personal__icons:hover {
    color: #f50057;
    transition: all 0.5s;
  }
`;
