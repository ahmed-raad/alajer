import React from "react";
import icons from "./../../Components/common/Icons";
import { NavLink } from "react-router-dom";

const AddingCircleBtn = ({link}) => {
    return (
        <div className="adding_circle">
          <NavLink to={link}>
            {icons.PlusCircle}
          </NavLink>
        </div>        
    );
}
 
export default AddingCircleBtn;