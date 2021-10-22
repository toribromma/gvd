import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  html, body {
    margin: 0;
    padding: 0;
  }
  *, *::after, *::before {
    box-sizing: border-box;
  }
  body {

    background: ${({ theme }) => theme.primaryDark};
    color: ${({ theme }) => theme.primaryLight};
    display: initial;
    /* font-family: 'Playfair Display', serif; */
    font-family: "Georgia";
    height: 100vh;
    justify-content: center;
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