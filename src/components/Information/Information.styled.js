import styled from "styled-components";

export const StyledInformation = styled.ul`
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
    margin: 1rem 1rem;
    margin-left: 0;
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
    margin: 1rem 1rem;
    font-size : 1.5rem;
    width: 250px;
    color: #FEFFFC;
    letter-spacing: 1.2px;
  }
`;

export const StyledBanner = styled.div`
  width: 100%;
  background: #1b1b1b;
`;
