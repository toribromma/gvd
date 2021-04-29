import React from "react";
import {StyledHero} from "./Hero.styled"

const Hero = ({button, p, description, name}) => {
    return (
        <StyledHero>
            <h1>{name}</h1>
            <h2>{description}</h2>
            <p>{p}</p>
            <button>{button}</button>
        </StyledHero>
    )
}

export default Hero