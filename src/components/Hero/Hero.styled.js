import styled from "styled-components";

export const StyledHero = styled.div`
background: ${({theme}) => theme.primaryLight};
color: ${({theme}) => theme.primaryDark};
max-width: 800px;
min-height: 642px;
padding: 1rem 2rem;
  h1,
  h2,
  p,
  button {

  }

  h1 {
    font-size: 2.5rem;
    font-weight: 400;
  }

  h2 {
    font-size: 2rem;
    font-weight: 400;
  }
  button {
    display: flex;
    cursor: pointer;
    border: 1px solid white;
    border-radius: 55px;
    padding: 1rem;
    margin-top: 10px;
    background: #1B1B1B;
    color: ${({theme}) => theme.primaryLight};
  }

  th, tr {
    border: 1px solid black;
    border-collapse: collapse;
    text-align: left;
    padding: 1px;
  }

  table {
    border-collapse: collapse;
  }

  

  button:hover {
    background-color: #ccc;
  }
  
  @media (max-width: ${({ theme }) => theme.mobile}) {
    h2 {
      font-size: 2rem;
    }
  }
  @media (max-width: 1071px) {
    margin: 0 auto;
    width: 100%;
    max-width: none;
    text-align: center;
    
    th, tr, table {
      text-align: center;
      margin: 0 auto;
    }
  }
`;
