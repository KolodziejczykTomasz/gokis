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
    display: block;
  width: 100%;
  height: auto; 
  max-width: 1920px;
  margin: 0 auto;    
  }
`

export default GlobalStyle
