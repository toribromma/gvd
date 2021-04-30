import styled from "styled-components";

export const StyledInformation = styled.div`
  display: block;
  width: 1024px;
  margin: 0 auto;
  box-sizing: content-box;

  @media(max-width: 1023px) {
    width: fit-content;
  }

  li {
    display: inline-block;
  }
  h1 {
    display: inline-block;
    text-transform: uppercase;
    margin: 1rem 2rem;
    /* margin-left: 40px; */
    padding: 1rem 3rem;
    font-size: 3rem;
    width: 250px;
    text-align: center;
    color: #FEFFFC;
    letter-spacing: 1.2px;
    background-color: #B02E12;
  }
  h2 {
    display: inline-block;
    text-transform: uppercase;
    margin: 1rem 2rem;
    font-size : 1.5rem;
    width: 250px;
    color: #FEFFFC;
    letter-spacing: 1.2px;

  }

  @media (max-width: ${({ theme }) => theme.mobile}) {
    h1, h2 {
      margin: 1rem 1rem 0 0rem;
    }
    h2 {
      padding: 1rem;
      width: 100%;
    }
  }
`;

export const StyledBanner = styled.div`
  width: 100%;
  background: #1b1b1b;
`;
