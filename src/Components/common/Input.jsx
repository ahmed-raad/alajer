import React from "react";

/**
 *
 *
 * @param {*} {inputName, inputValue, inputLabel, inputClass, inputType="text", onChange, isRequired=true}
 * @return {*} 
 */

const Input = props => {
    const {inputName, inputValue, inputLabel, inputClass, inputType="text", onChange, isRequired=true} = props;

    return ( 
        <label>
            <p>{inputLabel}</p>
            <input
                name={inputName}
                className={inputClass}
                type={inputType}
                onChange={onChange}
                value={inputValue}
                required={isRequired}
            />
        </label>
     );
}
 
export default Input;