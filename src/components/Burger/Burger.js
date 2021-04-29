import React from 'react';
import { StyledBurger } from './Burger.styled';
import { bool, func } from 'prop-types';

const Burger = ({open, setOpen}) => {
  return (
    <StyledBurger aria-label="menu button" open={open} onClick={() => setOpen(!open)}>
      <div />
      <div />
      <div />
    </StyledBurger> 
  )
}

Burger.propTypes = {
  open: bool.isRequired,
  setOpen: func.isRequired,
};

export default Burger;