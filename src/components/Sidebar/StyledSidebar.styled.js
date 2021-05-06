import styled from "styled-components";

export const StyledSidebar = styled.div`
  background: #1b1b1b;
  width: 220px;
  color: ${({ theme }) => theme.primaryLight};
  padding: 1rem;
  @media (max-width: 999px) {
    margin: 0 auto;
    width: 800px;
    text-align: center;
  }
`;
