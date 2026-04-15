import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  :root{
    --backgound: #C49847;
    --background-gradient-one: rgba(196, 152, 71, 1) ;
    --background-gradient-two: rgba(97, 179, 86, 1); //#61B356
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
    background: var(--backgound);
    background: linear-gradient(180deg, var(--background-gradient-one) 0%, var(--background-gradient-two) 100%);
    background-attachment: fixed;
  }
`;
