import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  html, body {
    margin: auto;
    padding: 0;
    max-width: 1280px;
    font-family: 'Roboto', sans-serif;
  }
  *, *::after, *::before {
    box-sizing: border-box;
  }
  body {
    background: ${({ theme }) => theme.primaryDark};
    color: ${({ theme }) => theme.primaryLight};
    display: initial;
    /* height: 100vh;
    justify-content: center; */
    text-rendering: optimizeLegibility;
  }
  h1 {
    color: #B02F40;
  }
  p {
    font-size: 18px;
    line-height: 1.5;
  }

  th, tr {
    font-weight: 300;
  }

  a {color: #B02F40}

  
  `