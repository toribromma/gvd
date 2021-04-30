import React from "react";
import {StyledSidebar} from "./StyledSidebar.styled";

const Sidebar = (props) => {
    return (
        <StyledSidebar>
            {props.children}
        </StyledSidebar>
    )
}

export default Sidebar;