import styled from "styled-components";

export const MainWrapper = styled.div`
  display: flex;
  justify-content: center;
  justify-items: center;
`;

export const OrangeNotch = styled.div`
  width: 500px;
  height: 70px;
  background-color: #fffae6;
  margin-top: -25px;
  border-radius: 35px;
  display: flex;
  justify-items: center;
  align-items: center;
`;

export const Circle = styled.div`
  height: 30px;
  width: 30px;
  background-color: #ff8a00;
  border-radius: 50%;
  display: flex;
  justify-items: center;
  align-items: center;
  color: white;
  #num {
    color: white !important;
    text-align: center;
    width: 100%;
  }
`;

export const CircleWrapper = styled.div`
  display: flex;
  justify-items: center;
  align-items: center;
  padding-left: 38px;
  p {
    font-style: italic;
    font-weight: 300;
    font-size: 16px;
    font-family: "Inter", sans-serif;
    line-height: 22px;
    color: #ff8a00;
    margin-left: 10px;
  }
`;
