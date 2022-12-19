import styled from "styled-components";

export const MainWrapper = styled.div`
  display: flex;
  justify-content: start;
  align-items: center;
  gap: 10px;
  margin-bottom: 60px;
  flex-wrap: wrap;
`;

export const Head = styled.div`
  max-width: 800px;
  width: 800px;
  @media (max-width: 768px) {
    width: 90vw;
  }
`;
