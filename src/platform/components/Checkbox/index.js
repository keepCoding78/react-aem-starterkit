import React from 'react';
import PropTypes from 'prop-types';

import {
  MdCheckBox,
  MdCheckBoxOutlineBlank,
} from 'react-icons/lib/md';

const CheckedBox = () => ( <MdCheckBox className="checked" /> );
const UncheckedBox = () => ( <MdCheckBoxOutlineBlank className="unchecked" /> );

const Checkbox = ({ onClick, checked }) => {
  return <div className="checkbox" onClick={ onClick }>{ checked ? <CheckedBox /> : <UncheckedBox />}</div>
  }

Checkbox.propTypes = {
  checked: PropTypes.bool,
  disabled: PropTypes.bool,
  onClick: PropTypes.func
};

Checkbox.defaultProps = {
  checked: false,
  disabled: false,
  onClick: () => {}
};


export default Checkbox;
