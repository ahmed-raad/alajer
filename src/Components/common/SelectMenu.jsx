import React from 'react';

/**
 *
 *
 * @param {*} {selectName, selectValue, selectLabel, selectClass, firstOption, onChange}
 * 'firstOption' is diabled, and it represents the text on the select element
 * @return {*} 
 */

const SelectMenu = (props) => {
    const {selectName, selectValue, selectLabel, selectClass, firstOption, options, onChange} = props;

    return ( 
        <label>
            <p>{selectLabel}</p>
            <select
                name={selectName}
                className={selectClass}
                onChange={onChange}
                value={selectValue}
            >
                <option value="" disabled selected hidden>
                    {firstOption}
                </option>

                {options.map((city) => (
                <option key={city} value={city}>
                    {city}
                </option>
                ))}
            </select>
        </label>
     );
}
 
export default SelectMenu;