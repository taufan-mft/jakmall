import styled from "styled-components";


export const MainWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  max-width: 800px;
  width: 100%;
  margin-bottom: 8px;
  padding-right: 8px;
  h1 {
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 700;
    font-size: 36px;
    line-height: 44px;
    color: #FF8A00;
  }
  label {
    margin-left: 10px;
    font-style: italic;
    font-weight: 300;
    font-size: 14px;
    line-height: 19px;
    color: #2D2A40;
    mix-blend-mode: normal;
    opacity: 0.8;
  }
`;

export const CheckWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 57px;
`;

export const DropshipCheck = styled.div`
  height: 18px;
  width: 18px;
  font-size: 12px;
  border: solid #1BD97B;
;
`