import styled from "styled-components";

export const StyledSidebar = styled.div`
margin: 0;
  background: #1b1b1b;
  width: 250px;
  color: ${({ theme }) => theme.primaryLight};
  padding: 1rem;
  @media (max-width: ${({theme}) => theme.desktop}) {
    margin: 0 auto;
    width: 100%;
    text-align: center;
  }
`;
