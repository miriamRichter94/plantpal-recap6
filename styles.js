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
    --text-color: #141c14;
    --tooltip-text-color: #fafaf7;
    --tooltip-background: #141c14;
    --box-shadow: #141c14;
    --toggle-wrapper-background: rgba(0, 0, 0, 0.15);
  }

  :root.dark-mode{
    --backgound: #422e01;
    --background-gradient-one: rgba(66, 46, 1, 1);
    --background-gradient-two: rgba(1, 66, 1, 1); //#014201
    --background-plant-card: #141c14; 
    --text-color: #fafaf7;
    --tooltip-text-color: #fafaf7;
    --tooltip-background: #141c14;
    --box-shadow: #fafaf7;
    --toggle-wrapper-background: rgba(255, 255, 255, 0.15);
  }

  body {
    display: flex;
    justify-content: center;
    margin: 5px;
    font-family: system-ui;
    background: var(--backgound);
    background: linear-gradient(180deg, var(--background-gradient-one) 0%, var(--background-gradient-two) 100%);
    background-attachment: fixed;
  }
`;
