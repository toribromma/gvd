import React from "react";
import {StyledHero} from "./Hero.styled"

const Hero = ({...props}) => {
    return (
        <StyledHero {...props}>
            {props.children}
        </StyledHero>
    )   
}

export default Hero