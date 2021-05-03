import styled from "styled-components";

export const StyledSidebar = styled.div`
    background: ${({theme}) => theme.primaryDark};
    width: 200px;
    /* margin-top: 132px;got */
    color: ${({theme}) => theme.primaryLight};
    padding: 20px;

    @media(max-width: 999px) {
        margin: 0 auto;
        /* padding: 2rem; */
        width: 100%;
        /* text-align: center; */
        /* border: white solid 2px; */
    }
`