import styled from "styled-components";

export const StyledSidebar = styled.div`
  margin: 0;
  background: #1b1b1b;
  color: ${({ theme }) => theme.primaryLight};
  padding: 1rem;
  min-height: 50vh;

  @media (min-width: ${({ theme }) => theme.desktop}) {
    padding: 50px 500px;
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
`;
