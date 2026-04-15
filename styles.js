import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  :root{
    --backgound: #826F4B;
    --background-gradient-one: rgba(130, 111, 75, 1);
    --background-gradient-two: rgba(83, 147, 75, 1); //#53934B
    --background-plant-card: #fafaf7;
    --plant-card-font-color: black;
  }

  :root.dark-mode{
    --backgound: #422e01;
    --background-gradient-one: rgba(66, 46, 1, 1);
    --background-gradient-two: rgba(1, 66, 1, 1); //#014201
    --background-plant-card: #141c14; 
    --plant-card-font-color: #fafaf7; 
    --plant-card-box-shadow: #fafaf7;
  }

  body {
    margin: 0;
    font-family: system-ui;
    background: #826F4B;
    background: linear-gradient(180deg, var(--background-gradient-one) 0%, var(--background-gradient-two) 100%);
    background-attachment: fixed;
  }
`;
