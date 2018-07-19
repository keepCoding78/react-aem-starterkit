import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

const Input = (props) => {
    const {type, placeHolder, className, value, ariaLabel , name, inputHandler, labelText ,id, showLabel} = props;
    return(
        <Fragment>
            {showLabel && <label htmlFor={id}>{labelText}</label>}
            <input type={type} placeholder = {placeHolder} id={id} className={`input ${className}`} value= {value} aria-label={ariaLabel} onKeyUp={inputHandler}/>
        </Fragment>
    );
}

Input.defaultProps = {
    type: 'text',
    placeHolder: '',
    className: '',
    ariaLabel: 'input',
    name: '',
    labelText: '',
    showLabel: false
}

Input.propTypes = {
    type : PropTypes.string,
    placeHolder : PropTypes.string,
    className: PropTypes.string,
    value: PropTypes.string,
    ariaLabel: PropTypes.string,
    name: PropTypes.string,
    inputHandler: PropTypes.func,
    showLabel: PropTypes.bool,
    labelText: PropTypes.string,
    id: PropTypes.string
}
export default Input;