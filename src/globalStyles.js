import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
* {
  box-sizing: border-box;
  margin: 0;
  }
  
  @font-face {
    font-family: 'Nasalisation';
    src: url('./fonts/nasalization-rg-otf') format('otf');
  }
  @font-face {
    font-family: 'Rethink';
    src: url('./fonts/RethinkSans-VariableFont_wght.ttf') format('ttf');
  }
  `;

export default GlobalStyles