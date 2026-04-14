import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  body {
    margin: 0;
    font-family: system-ui;
    background: #826F4B;
    background: linear-gradient(180deg, rgba(130, 111, 75, 1) 0%, rgba(83, 147, 75, 1) 100%);
    background-attachment: fixed;
  }
`;
