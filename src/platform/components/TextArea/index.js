import React from 'react';
import classnames from 'classnames';


import Label from '../Label';


export const InputFeedback = ({ error }) =>
  error ? (
    <div className="input-feedback eta">{error}</div>
  ) : null;

const TextArea = (props) => {
  const { type, id, label, error, value, onChange, labelclasses, classes, maxLength } = props;

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
      <textarea
        id={id}
        className="input-field"
        type={type}
        value={value}
        onChange={onChange}
        maxLength={maxLength || null}
      />
      <InputFeedback error={error} />
    </div>
  )
}

export default TextArea;