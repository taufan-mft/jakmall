import styled from "styled-components";

interface Props {
  isSelected: boolean;
}
export const Card = styled.div<Props>`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: start;
  cursor: pointer;
  width: 180px;
  height: 60px;
  padding-left: 15px;
  background: ${(props) =>
    props.isSelected ? "rgba(27, 217, 123, 0.1)" : "white"};
  border: ${(props) =>
    props.isSelected ? "2px solid #1BD97B" : "1px solid #CCCCCC"};
  h1 {
    font-style: italic;
    font-weight: 300;
    font-size: 13px;
    line-height: 18px;
    color: #000000;
    mix-blend-mode: normal;
    opacity: 0.8;
    font-family: "Inter", serif;
    padding: unset;
    margin: unset;
  }
  h2 {
    font-style: normal;
    font-weight: 700;
    font-size: 16px;
    line-height: 22px;
    color: #2d2a40;
    font-family: "Inter", serif;
    padding: unset;
    margin: unset;
  }
`;
