import { createGlobalStyle } from "styled-components"


const GlobalStyle = createGlobalStyle`
  html {
    box-sizing: border-box;
  }

  *,
  *::before,
  *::after {
    box-sizing: inherit;
  }

  body {
    margin: 0 auto; 
    width: 100vw;   
    max-width: 1920px;    
  }
`

export default GlobalStyle
