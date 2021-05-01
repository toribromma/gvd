import styled from "styled-components";

export const StyledCarousel = styled.div`
  max-width: 500px;
  margin: 0 auto;

  img {
    opacity: 90%;
    background-blend-mode: darken, luminosity;
    /* height: 325px; */
    object-fit: contain;
  }

  @media (max-width: ${({ theme }) => theme.mobile}) {
    img {
     height: fit-content;
    }
    
  }
`;
