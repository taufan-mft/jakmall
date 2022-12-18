import styled from "styled-components";

export const MainWrapper = styled.div`
  background-color: #fffae6;
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const WhiteBox = styled.div`
  height: 550px;
  max-width: 1100px;
  width: 100%;
  margin-right: 10px;
  margin-left: 10px;
  background-color: white;
`;

export const FlexHead = styled.div`
  display: flex;
  justify-content: start;
  flex-wrap: wrap;
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

export const RightColumn = styled.div`
  padding-left: 19px;
  position: relative;
  p {
    font-family: "Inter", serif;
    font-size: 14px;
    line-height: 16px;
    color: #000000;
    mix-blend-mode: normal;
    opacity: 0.6;
  }
  h1 {
    z-index: 9;
    position: relative;
    font-family: "Montserrat", serif;
    font-style: normal;
    font-weight: 700;
    font-size: 36px;
    line-height: 44px;
    color: #ff8a00;
    margin: unset;
    padding: unset;
  }
`;

export const Separator = styled.div`
  width: 80px;
  height: 1px;
  left: 870px;
  top: 212px;
  background: #d8d8d8;
`;

export const CostWrapper = styled.div`
  position: absolute;
  bottom: 0;
`;

export const BigButton = styled.button`
  cursor: pointer;
  width: 260px;
  height: 60px;
  background-color: rgba(255, 138, 0, 1);
  color: white;
  font-weight: 300;
  font-size: 18px;
  font-family: "Inter", serif;
  border: 1px solid rgba(255, 255, 255, 0.2);
  box-shadow: 3px 5px 10px rgba(255, 138, 0, 0.2);
  border-radius: 2px;
`;
