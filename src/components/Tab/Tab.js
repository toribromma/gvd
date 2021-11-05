import React from "react";
import { StyledTab } from "./Tab.styled";
import { useRouter } from "../../hooks";

const Tab = (props) => {
  const handleClick = (e) => {
    const index = parseInt(e.target.id, 0);
    if (index !== props.active) {
      props.setActive(index);
    }
    router.push(`/${props.location}`);
    props.setOpen(false);
  };

  const router = useRouter();

  return (
    <StyledTab {...props} onClick={handleClick}>
      {props.children}
    </StyledTab>
  );
};

export default Tab;
