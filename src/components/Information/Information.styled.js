import styled from "styled-components";

export const StyledInformation = styled.div`
  display: block;
  margin: -42px auto;
  box-sizing: content-box;

  li {
    display: inline-block;
  }
  h1 {
    display: inline-block;
    text-transform: uppercase;
    padding: 0.6rem 3rem;
    font-size: 4rem;
    color: #fefffc;
    letter-spacing: 1.2px;
    background-color: #b02e12;
  }
  h2 {
    display: inline-block;
    text-transform: uppercase;
    margin: 0rem 1rem;
    font-size: 1.25rem;
    width: 250px;
    color: #fefffc;
    letter-spacing: 1.2px;
  }

  @media (max-width: ${({ theme }) => theme.mobile}) {
    margin: 0px auto;
    h1 {
      font-size: 3rem;
    }
    h1,
    h2 {
      margin: 0 auto;
      text-align: left;
    }

    h2 {
      margin-left: 15px;
      padding: 10px;
    }
  }
`;

export const StyledBanner = styled.header`
  width: 100%;
  background: #1b1b1b;
  height: 140px;

  @media (max-width: ${({ theme }) => theme.mobile}) {
    height: 150px;
  }
`;
