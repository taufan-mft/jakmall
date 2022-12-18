import styled from "styled-components";


export const MainWrapper = styled.div`
  background-color: #FFFAE6;
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const WhiteBox = styled.div`
  height: 550px;
  width: 100%;
  margin-top: 55px;
  margin-right: 50px;
  margin-left: 50px;
  background-color: white;
`;

export const LeftColumn = styled.div`
  min-height: 460px;
  max-width: 760px;
  margin-left: 40px;
  border-right: 1px solid rgba(255, 138, 0, 0.2);
  @media (max-width: 768px) {
    margin-left: 12px;
  }
`;