import styled from "styled-components";


export const MainWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  max-width: 800px;
  gap: 30px;
  width: 100%;
  @media (max-width: 500px) {
   max-width: 80vw;
  }
`;

export const Input = styled.input`
  font-size: 18px;
  padding: 10px;
  margin: 10px;
  background: papayawhip;
  border: none;
  border-radius: 3px;
  ::placeholder {
    color: palevioletred;
  }
`;