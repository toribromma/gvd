import React, { useState } from "react";
import { bool } from "prop-types";
import { StyledMenu } from "./Menu.styled";
import { Tab } from "../../components";

const Menu = ({ open, ...props }) => {
  const [active, setActive] = useState(0);
  const isHidden = open ? true : false;
  const tabIndex = isHidden ? 0 : -1;

  return (
    <StyledMenu open={open} aria-hidden={!isHidden} {...props}>
      <Tab
        id={0}
        active={active === 0}
        location=""
        tabIndex={tabIndex}
        setActive={setActive}
        open={open}
        setOpen={props.setOpen}
      >
        Home
      </Tab>
      <Tab
        id={1}
        active={active === 1}
        location="about"
        tabIndex={tabIndex}
        setActive={setActive}
        open={open}
        setOpen={props.setOpen}
      >
        {/* <span aria-hidden="true">💁🏻‍♂️</span> */}
        About Us
      </Tab>
      <Tab
        id={2}
        active={active === 2}
        tabIndex={tabIndex}
        location="development"
        setActive={setActive}
        open={open}
        setOpen={props.setOpen}
      >
        {/* <span aria-hidden="true">💁🏻‍♂️</span> */}
        Development
      </Tab>
      <Tab
        id={3}
        active={active === 3}
        location="jv&a"
        setActive={setActive}
        tabIndex={tabIndex}
        open={open}
        setOpen={props.setOpen}
      >
        {/* <span aria-hidden="true">💸</span> */}
        Joint Venture
        <br />& Acquisition
      </Tab>
      <Tab
        id={4}
        active={active === 4}
        location="properties"
        setActive={setActive}
        href="/"
        tabIndex={tabIndex}
        open={open}
        setOpen={props.setOpen}
      >
        {/* <span aria-hidden="true">📩</span> */}
        Properties
      </Tab>
      <Tab
        id={5}
        active={active === 5}
        location="pm&l"
        setActive={setActive}
        href="/"
        tabIndex={tabIndex}
        open={open}
        setOpen={props.setOpen}
      >
        {/* <span aria-hidden="true">📩</span> */}
        Property Management
        <br />& Leasing
      </Tab>
      <Tab
        id={6}
        active={active === 6}
        location="contactus"
        setActive={setActive}
        href="/"
        tabIndex={tabIndex}
        open={open}
        setOpen={props.setOpen}
      >
        {/* <span aria-hidden="true">📩</span> */}
        Contact Us
      </Tab>
    </StyledMenu>
  );
};

Menu.propTypes = {
  open: bool.isRequired,
};

export default Menu;
