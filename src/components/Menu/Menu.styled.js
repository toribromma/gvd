import styled from "styled-components";

export const StyledMenu = styled.nav`
  display: flex;
  flex-direction: column;
  justify-content: center;
  background: ${({ theme }) => theme.primaryLight};
  transform: ${({ open }) => (open ? "translateX(0)" : "translateX(-100%)")};
  height: 100vh;
  text-align: left;
  padding: 1rem;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 1;
  /* transition: transform 0.3s ease-in-out; */
  @media (max-width: ${({ theme }) => theme.mobile}) {
    width: 100%;
  }
  @media (min-width: ${({ theme }) => theme.desktop}) {
    display: flex;
    flex-direction: row;
    position: absolute;
    top: 125px;
    right: 0;
    margin: 0 auto;
    transform: none;
    height: fit-content;
    width: 1024px;
    text-align: center;
    background: transparent;
  }
  a {
    font-size: 2rem;
    text-transform: uppercase;
    padding: 2rem 0;
    font-weight: bold;
    letter-spacing: 0.5rem;
    color: ${({ theme }) => theme.primaryDark};
    text-decoration: none;
    transition: color 0.3s linear;
    @media (max-width: ${({ theme }) => theme.mobile}) {
      font-size: 1.5rem;
      text-align: center;
    }
    @media (min-width: ${({ theme }) => theme.desktop}) {
      font-size: 1rem;
      padding: 1rem 0.5rem;
      text-transform: initial;
      font-weight: inherit;
      letter-spacing: 0;
      color: white;
      line-height: 130%;
    }

    &:hover {
      color: ${({ theme }) => theme.primaryHover};
    }
  }
`;
