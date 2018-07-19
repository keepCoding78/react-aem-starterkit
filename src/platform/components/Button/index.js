import React from 'react';
import PropTypes from 'prop-types';

const Button = (props) => {
  const { disabled, handleClick, classes, type, buttonLabel } = props;
  return (
    <button disabled={ disabled } onClick={ handleClick } className={ classes } type={ type }>
      { buttonLabel }
    </button>
  );
};

Button.propTypes = {
  buttonLabel: PropTypes.string,
  classes: PropTypes.string,
  disabled: PropTypes.bool,
  handleClick: PropTypes.func,
  type: PropTypes.string,
}

export default Button;
