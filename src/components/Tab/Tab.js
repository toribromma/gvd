import React from "react";
import {StyledTab} from "./Tab.styled"
import {useRouter} from "../../hooks"

const Tab = (props) => {
    
    const handleClick = (e) => {
          const index = parseInt(e.target.id, 0);
          if (index !== props.active) {
            props.setActive(index);
          }
          router.push(`/${props.location}`)
          props.setOpen(false)
        };

    // Get the router object
    const router = useRouter();
    // Get value from query string (?postId=123) or route param (/:postId)
    // console.log(router.query.postId);
    // Get current pathname
    // console.log(router.pathname);
    // Navigate with with router.push()
    return <StyledTab {...props} 
    // onClick={(e) => }
    onClick={handleClick}
    >{props.children}</StyledTab>;
  }

  export default Tab;
  