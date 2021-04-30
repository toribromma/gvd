import styled from "styled-components";

export const StyledSidebar = styled.div`
    background: ${({theme}) => theme.primaryDark};
    width: 200px;
    /* margin-top: 132px; */
    color: ${({theme}) => theme.primaryLight};
    padding: 20px;

    @media(max-width: 999px) {
        margin: 0 auto;
        /* width: 80%; */
        /* border: white solid 2px; */
    }
`