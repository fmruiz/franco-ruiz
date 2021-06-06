import styled from "styled-components";

export const WorkContainer = styled.div`
  height: 100vh;
  background-color: #000000;
  display: flex;
  flex-direction: column;
  user-select: none;

  a {
    text-decoration: none;
    cursor: none;
  }

  .work__item {
    transition: all 0.5s;
  }
  .work__item:hover {
    padding-left: 50px;
    transition: all 0.5s;
  }
`;

export const LinkContainer = styled.div`
  position: relative;

  .link {
    top: 60px;
    left: 75%;
  }
`;

export const WorkItems = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 400px;
  margin-left: 200px;
`;

export const WorkItemContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 100px;
`;

export const WorkItemTitle = styled.h3`
  margin: 0;
  color: white;
  font-size: 100px;
`;

export const WorkItemParagraph = styled.p`
  margin: 0;
  color: #ff1744;
  font-size: 25px;
  font-weight: bold;
`;
