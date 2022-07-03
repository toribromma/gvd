import styled from "styled-components";

export const StyledSidebar = styled.div`
  margin: 0;
  background: #1b1b1b;
  color: ${({ theme }) => theme.primaryLight};
  padding: 3rem 2rem;
  min-height: 50vh;


  @media (min-width: ${({ theme }) => theme.desktop}) {
      text-align: center;
    h1 {
      font-size: 3rem;
    }
    h2 {
      font-size: 1.5rem;
    }
    p {
      font-size: 1.2rem;
    }
  }
`;
