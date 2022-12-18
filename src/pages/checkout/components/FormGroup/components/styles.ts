import styled from "styled-components";


export const CustomLabel = styled.label`
  color: red;
  position: absolute;
  pointer-events: none;
  left: 10px;
  top: 20px;
  transition: 0.2s ease all;
  -moz-transition: 0.2s ease all;
  -webkit-transition: 0.2s ease all;`

export const CustomInput = styled.div`
  position: relative;
  max-width: 400px;
  width: 100%;
  input {
    height: 60px;
    box-sizing: border-box;
    padding: 30px 30px 10px 8px;
    display: block;
    width: 100%;
    border: 1px solid #1BD97B;
    font-style: normal;
    font-weight: 700;
    font-size: 16px;
    max-width: 400px;
    line-height: 22px; /* identical to box height */
    color: #2D2A40;
    &::placeholder {
      color: transparent;
    }

    &:focus {
      outline: none;
    }

    &:focus ~ label,
    &:not(:placeholder-shown) ~ label{
      top: 10px;
      font-style: italic;
      font-weight: 300;
      font-size: 13px;
      line-height: 18px;
      color: #1BD97B;
      mix-blend-mode: normal;
      opacity: 0.8;
    }

  }

  label {
    position: absolute;
    pointer-events: none;
    left: 10px;
    top: 20px;
    transition: 0.2s ease all;
    -moz-transition: 0.2s ease all;
    -webkit-transition: 0.2s ease all;
    font-weight: 300;
    font-size: 16px;
    line-height: 22px;
    color: #000000;

    mix-blend-mode: normal;
    opacity: 0.4
  }
  
  #icon {
    position: absolute;
    right: 10px;
    top: 22px;
  }
  
`