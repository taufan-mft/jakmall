import styled from "styled-components";

export const MainWrapper = styled.div`
  display: flex;
  justify-content: start;
  align-items: center;
  gap: 10px;
  margin-bottom: 60px;
  span {
    font-family: "Inter", serif;
    font-style: italic;
    font-weight: 300;
    font-size: 14px;
    line-height: 19px;
    color: #000000;
    mix-blend-mode: normal;
    opacity: 0.6;
  }
`;

export const Head = styled.div`
  height: 460px;
  max-width: 800px;
  width: 800px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: start;
  margin-left: 240px;
  @media (max-width: 768px) {
    width: 90vw;
    margin-left: unset;
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

  .order-id {
    font-family: "Inter", serif;
    font-size: 14px;
    line-height: 16px;
    color: #000000;
  }
  .shipping {
    padding: unset;
    margin: unset;
    font-family: "Inter", serif;
    font-size: 14px;
    line-height: 16px;
    color: #000000;
    mix-blend-mode: normal;
    opacity: 0.6;
  }
`;
