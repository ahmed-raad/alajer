import React from 'react';

/**
 *
 *
 * @param {*} {btnLabel, btnClass="", onClick, btnType="button"}
 * @return {*} 
*/

const SignButton = props => {
    const {btnLabel, btnClass="", onClick, btnType="button"} = props;
    return ( 
            <button
                className={`sign-btn ${btnClass} btn`}
                type={btnType}
                onClick={onClick}
            >
                {btnLabel}
            </button>
    );
}
 
export default SignButton;