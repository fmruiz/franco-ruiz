import styled from "styled-components";

export const ExperienceContainer = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #1d1d1d;
  width: 93vw;
  margin-left: 7vw;
`;

export const ExperienceTitle = styled.h3`
  color: white;
  font-size: 90px;
  margin-left: 100px;
  margin-bottom: 0;
`;

export const ExperienceNumberTitle = styled.span`
  color: white;
  font-size: 30px;
`;

export const ExperienceSubtitle = styled.h5`
  margin: 0;
  color: white;
  font-size: 30px;
`;

export const ExperienceParagraph = styled.p`
  text-align: justify;
  margin: 30px 0 0 0;
  color: white;
  font-size: 25px;
  width: 50%;
`;

export const ExperienceImg = styled.img`
  margin: 30px 0 0 0;
  width: 50%;
  border-radius: 5px;
  border: 1px solid #282828;
`;

export const ExperienceContent = styled.div`
  margin-bottom: 100px;
  margin-left: 165px;
`;

export const ExperienceSubtitleContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 50%;
  margin-top: 80px;
  border-bottom: 1px solid lightgray;
  padding-bottom: 10px;
  align-items: center;
`;

export const ExperienceSubtitleImg = styled.div`
  display: flex;
  align-items: center;
`;

export const ExperienceImgCompany = styled.img`
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

export const ExperiencePosition = styled.h5`
  margin: 0;
  color: white;
  font-size: 30px;
`;
