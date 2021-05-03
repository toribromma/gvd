import React from "react"
import {StyledFlexContainer} from "./FlexContainer.styled"

const FlexContainer = (props) => {
    return (
        <StyledFlexContainer {...props}>
            {props.children}
        </StyledFlexContainer>
    )
}

export default FlexContainer;