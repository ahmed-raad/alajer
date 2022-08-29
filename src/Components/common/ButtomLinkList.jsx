import React from 'react';
import { NavLink } from "react-router-dom";

/**
 *
 *
 * @param {*} { links: [ { linkPath, linkLabel }, ... ] }
 *
 * @return {*} 
 */
const BottomLinkList = ({ links }) => {
    return (
        <div className="bottom-links">
            <ul>
                {links.map(link => (
                    <li key={link.path}>
                        <NavLink className="bottom-link" to={link.path}>
                            {link.label}
                        </NavLink>
                    </li> 
                ))}
            </ul>
        </div>
     );
}
 
export default BottomLinkList;