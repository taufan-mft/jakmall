import styled from "styled-components";


export const Circle = styled.div<{ isActive: boolean }>`
  height: 30px;
  width: 30px;
  background-color: ${(props) => props.isActive ? '#FF8A00' : '#FFE4B8'};
  border-radius: 50%;
  display: flex;
  justify-items: center;
  align-items: center;
  color: ${(props) => props.isActive ? 'white' : '#FF8A00'};

  #num {
    color: ${(props) => props.isActive ? 'white' : '#FF8A00'};
    text-align: center;
    width: 100%;

  }
`;