import styled from "styled-components";

export const StyledCarousel = styled.div`
  max-width: 800px;
  margin: 0 auto;

  img {
    opacity: 90%;
    background-blend-mode: darken, luminosity;
    object-fit: contain;
  }

  /* @media (max-width: ${({ theme }) => theme.mobile}) {
    img {
     height: fit-content;
    } */
    
  }
`;
