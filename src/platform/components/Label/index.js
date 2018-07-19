import React from 'react';

const Label = (props) => {
  const { className, children } = props;

  return (
    <label className={className} {...props}>
      {children}
    </label>
  );
};

export default Label;
