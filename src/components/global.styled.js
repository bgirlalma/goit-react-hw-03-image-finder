
import 'modern-normalize';
import { createGlobalStyle } from 'styled-components'

export const GlobalStyled = createGlobalStyle`
body {
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
      'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
      sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    overflow-x: hidden;
  }
  
  code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
      monospace;
  }

  h1,h2,h3,h4{
    margin: 0;
    padding: 0;
  }

  li{
    list-style: none;
    margin: 0;
    padding: 0;
  }

  p{
    margin: 0;
    padding: 0;
  }

  button{
    margin: 0;
    padding: 0;
    border: none;
  }
`;
