import styled from "styled-components";

export const StyledHero = styled.div`
background: ${({theme}) => theme.primaryLight};
color: ${({theme}) => theme.primaryDark};
max-width: 800px;
min-height: 600px;
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
    padding: 2px;
  }

  table {
    border-collapse: collapse;
  }

  

  button:hover {
    background-color: #ccc;
  }
  
  @media (max-width: ${({ theme }) => theme.mobile}) {
    text-align: center;
    h2 {
      font-size: 2rem;
    }
  }
  @media (min-width: ${({ theme }) => theme.desktop}) {
  }
`;
