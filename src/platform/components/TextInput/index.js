import React from 'react';
import classnames from 'classnames';

import Label from '../Label';


export const InputFeedback = ({ error }) =>
  error ? (
    <div className="input-feedback eta">{error}</div>
  ) : null;

const TextInput = (props) => {
  const { type, id, label, error, value, onChange, labelclasses, classes, inputClassName, placeholder, ariaLabel } = props;

  const wrapperClasses = classnames(
    {
      'error': !!error,
    },
    classes
  );


  return (
    <div className={wrapperClasses}>
      <Label htmlFor={id} error={error} className={labelclasses}>
        {label}
      </Label>
      <input
        id={id}
        className={inputClassName}
        type={type}
        value={value}
        onChange={onChange}
        placeholder = {placeholder}
        aria-label = {ariaLabel}
      />
      <InputFeedback error={error} />
    </div>
  )
}


TextInput.defaultProps = {
  inputClassName: 'input-field',
  ariaLabel: 'input',
}

export default TextInput;