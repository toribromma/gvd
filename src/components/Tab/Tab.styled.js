import styled from "styled-components";

export const StyledTab = styled.button`
  border: none;
  outline: none;
  cursor: pointer;
  padding: 0.7rem 2.05rem;
  margin-bottom: -16px;
  position: relative;
  margin-right: 0.1em;
  font-size: 1.2rem;
  border: ${(props) => (props.active ? "1px solid #ccc" : "")};
  border-bottom: ${(props) => (props.active ? "none" : "")};
  background-color: ${(props) => (props.active ? "#EFFFFA" : "transparent")};
  color: ${(props) => (props.active ? "black" : "white")};
  font-weight: ${(props) => (props.active ? "700" : "300")};
  /* height: ${(props) => (props.active ? "3em" : "2.6em; top:.4em")}; */
  /* transition: background-color 0.5s ease-in-out; */

  :hover {
    background-color: white;
    color: #1B1B1B;
  }

  @media (max-width: 1071px) {
    padding: 2rem;
  }
`;
