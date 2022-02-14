import { createGlobalStyle, ThemeProvider } from "styled-components";
const GlobalStyle = createGlobalStyle`
  :root{
    --global-padding: 12rem; 
  }
  html,
  body {
    background-color: #fbfbfe;
    min-height: 100vh;
    display:flex; 
    flex-direction:column; 
    color: black;
    font-family: 'Montserrat', sans-serif;  
  }
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
  ::-webkit-scrollbar {
    width: 8px;
  }
 
  ::-webkit-scrollbar-track {
      -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.3); 
      box-shadow: inset 0 0 6px rgba(0,0,0,0.3); 
      border-radius: 10px;
  }
  
  ::-webkit-scrollbar-thumb {
      border-radius: 10px;
      -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.5); 
      box-shadow: inset 0 0 6px rgba(0,0,0,0.5); 
  }
  @media only screen and (max-width: 990px) {
      :root{
        --global-padding: 2rem; 
      }
  }
  a.link-portfolio{
    color: #010101;
    text-decoration: none;
    align-items: center;
    display: flex;
  }
`;

export default GlobalStyle;