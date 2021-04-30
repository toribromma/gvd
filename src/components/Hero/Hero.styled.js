import styled from "styled-components";

export const StyledHero = styled.div`
  h1,
  h2,
  p,
  button {
    margin: 1rem auto;
    max-width: 700px;
  }

  h1 {
    font-size: 1.5rem;
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
    background: transparent;
    color: #ccc;
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
`;
