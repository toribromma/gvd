import styled from "styled-components";

export const StyledHero = styled.div`
  background: ${({ theme }) => theme.primaryLight};
  color: ${({ theme }) => theme.primaryDark};
  padding: 1rem 2rem;
  opacity: 95%;
  min-height: 50vh;

  .column {
    display: flex;
    justify-content: center;
    column-gap: 100px;
  }

  p {
    line-height: 2;
    width: 70%;
    margin:  40px auto;
  }

  ul {
    list-style-type: none;
  }
  
  li {
    line-height: 2
    
  }

  h1 {
    font-size: 2.5rem;
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
    background: #1b1b1b;
    color: ${({ theme }) => theme.primaryLight};
  }

  th,
  tr {
    border: 1px solid black;
    border-collapse: collapse;
    text-align: left;
    padding: 1px;
  }

  table {
    border-collapse: collapse;
    width: 100%;
    overflow: scroll;
  }

  button:hover {
    background-color: #ccc;
  }

  th,
  tr,
  table {
    /* text-align: center; */
    margin: 0 auto;
    font-size: 1.5rem;
  }

  @media (min-width: ${({ theme }) => theme.desktop}) {
    text-align: center;
    
    h1 {
      font-size: 3rem;
    }
    h2 {
      font-size: 2rem;
      font-weight: 600;
    }
    p {
      font-size: 1.2rem;
    }
  }

  @media (max-width: ${({ theme }) => theme.mobile}) {
    table,
    tr,
    th {
      font-size: 1rem;
    }

    .column {
      display: block;
      width: 100%;
    }

  }
`;
