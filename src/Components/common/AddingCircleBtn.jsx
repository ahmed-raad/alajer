import React from "react";
import icons from "./../../Components/common/Icons";
import { NavLink } from "react-router-dom";

const AddingCircleBtn = ({link}) => {
    return (
        <span className="adding_circle">
          <NavLink className="plus_sign" to={link}>
            {icons.PlusCircle}
          </NavLink>
        </span>        
    );
}
 
export default AddingCircleBtn;