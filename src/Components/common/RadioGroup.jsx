import React from "react";

/**
 *
 *
 * @param {*} {groupLabel, groupName, choices, onChange}
 * 
 * @return {*} 
 */

const RadioGroup = props => {
    const {groupLabel, groupName, choices, onChange} = props;
    return ( 
        <React.Fragment>
            <p>{groupLabel}</p>
            
            {
                choices.map(c => (
                    <span key={c}>
                        <label>
                            <input
                                type="radio"
                                name={groupName}
                                value={c}
                                onChange={onChange}
                            />
                            {c}
                        </label>
                    </span>
                ))
            }

        </React.Fragment>
     );
}
 
export default RadioGroup;