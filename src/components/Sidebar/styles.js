import styled from "styled-components";

export const SidebarContainer = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #181818;
  color: white;
  width: 7vw;
  height: 100vh;
  a {
    text-decoration: none;
  }
  .main__section {
    transition: all 0.5s;
  }
  .main__section:hover {
    color: #f50057;
    transition: all 0.5s;
  }
`;

export const SidebarLogoContainer = styled.div`
  display: flex;
  flex-direction: column;
  background-color: black;
  height: 20%;
  align-items: center;
  justify-content: center;
`;

export const SidebarLogoTitle = styled.h1`
  color: white;
  margin: 0 auto;
  text-align: center;
`;

export const SidebarLogoSubTitle = styled.p`
  color: #777777;
  margin: 20px auto 0 auto;
  font-size: 12px;
`;

export const SidebarItemsContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 60%;
  justify-content: center;
`;

export const SidebarItems = styled.p`
  padding-top: 15px;
  padding-bottom: 15px;
  margin-top: 0;
  margin-bottom: 0;
  text-align: center;
  color: #777777;
  :nth-child(1) {
    border-top: 1px solid #282828;
    border-bottom: 1px solid #282828;
  }
  :nth-child(3) {
    border-top: 1px solid #282828;
    border-bottom: 1px solid #282828;
  }
  :nth-child(5) {
    border-top: 1px solid #282828;
    border-bottom: 1px solid #282828;
  }
  :nth-child(7) {
    border-top: 1px solid #282828;
    border-bottom: 1px solid #282828;
  }
`;

export const SidebarSocialContainer = styled.div`
  display: flex;
  justify-content: space-around;
  color: #777777;
  .brand__icon {
    font-size: 20px;
    transition: all 0.5s;
  }
  .brand__icon:hover {
    color: #f50057;
    transition: all 0.5s;
  }
`;
