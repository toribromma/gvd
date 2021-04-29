import styled from "styled-components";

export const StyledHero = styled.div`
  /* display: inline-block; */
  /* float: left; */
  /* position: absolute;
  top: 30%;
  left: 25%;
  right: 25%; */
  text-align: left;
  margin: 1rem auto;

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
    border: 1px solid white;
    border-radius: 55px;
    padding: 1rem;
    margin-top: 10px;
    background: transparent;
    color: #ccc;
  }
  @media (max-width: ${({ theme }) => theme.mobile}) {
    /* left: 10%;
    right: 10%; */
    h2 {
      font-size: 2rem;
    }
  }
`;
