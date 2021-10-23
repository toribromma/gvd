import styled from "styled-components";

export const StyledHero = styled.div`
  background: ${({ theme }) => theme.primaryLight};
  color: ${({ theme }) => theme.primaryDark};
  padding: 1rem 2rem;
  opacity: 95%;
  min-height: 50vh;
  .column {
    float: left;
    width: 50%;
  }
  .row:after {
    content: "";
    display: table;
    clear: both;
  };
  h2,
  p,
  button {
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
    padding: 50px 500px;
    /* text-align: center; */
    h1 {
      font-size: 4rem;
    }
    h2 {
      font-size: 2rem;
    }

    p {
      font-size: 1.5rem;
    }
  }

  @media (max-width: ${({ theme }) => theme.mobile}) {
    table,
    tr,
    th {
      font-size: 1rem;
    }

    .column {
      width: 100%;
    }
  }
`;
