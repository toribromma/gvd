import styled from "styled-components";

export const StyledSidebar = styled.div`
  margin: 0;
  background: #1b1b1b;
  color: ${({ theme }) => theme.primaryLight};
  padding: 1rem;
  height: 50vh;
  @media (min-width: ${({ theme }) => theme.desktop}) {
    text-align: center;
    h1 {
      font-size: 4rem;
    }
    h2 {
      font-size: 2rem;
    }

    p {
      font-size: 1.5rem;
      margin: 50px 20%;
    }
  }
`;
