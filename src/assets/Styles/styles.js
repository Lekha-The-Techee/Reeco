import styled, { createGlobalStyle } from "styled-components";
const GlobalStyle = createGlobalStyle`
*{
    margin: 0;
    padding: 0;
    box-sizing: inherit;
}
html {
    box-sizing: border-box;
    font-size: 62.5%;
}
  
body {
    font-family: "Nunito", sans-serif;
    font-weight: 400;
    line-height: 1.6;
    font-size: 1.6rem;
    background: #F9F9F9;
    color: #333;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;

}
`;
export default GlobalStyle;

export const Container = styled.div`
  margin: 0 auto;
  padding: 0 50px;
  max-width: 1300px;
  width: 100%;
`;

const handleButtonType = (button) => {
  switch (button) {
    case "primary":
      return "color: #fff; background: #1e633f;border:none;";
    case "secondary":
      return "color: grey; background: #fff;border:1px solid grey;";
    case "outlined":
      return "color: #1e633f; background: #fff;border:1px solid #1e633f;";
    default:
      return "color: #000; background: #eee;";
  }
};

export const Button = styled.button`
  align-items: center;
  border-radius: 18px;
  padding: 6px 16px;
  font-size: 12px;
  font-weight: 500;
  line-height: 1.78;
  letter-spacing: 0.02857em;
  margin-left: 16px;
  outline: none;
  cursor: pointer;
  border: none;
  ${({ button }) => handleButtonType(button)};
  &:disabled {
    border: 1px solid #999999;
    background-color: #cccccc;
    color: #666666;
    cursor: not-allowed;
    pointer-events: all !important;
  }
`;