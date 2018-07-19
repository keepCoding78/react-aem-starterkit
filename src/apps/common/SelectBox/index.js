import React from 'react';
import PropTypes from 'prop-types';
import { MdArrowDropDown } from 'react-icons/lib/md/';

const DownArrow = () => ( <MdArrowDropDown size="20" className="down-arrow"/> );

const SelectBox = props => {
  const { options, classNames = '', renderValue, name, labelName, showLabel, ...otherProps } = props;
  const newRenderValue =
    renderValue === null || renderValue === undefined || renderValue === '' ? options[0].value : renderValue;

  return (
    <div className={`select-box-container ${classNames}`}>
      {showLabel ? (
        <label htmlFor={name}>{labelName}</label>
      ) : (
        <label htmlFor={name} className="hidden">
          {labelName}
        </label>
      )}
      <select name={name} id={name} className="select-box" value={newRenderValue} {...otherProps}>
        {options.map(option => {
          return (
            <option value={option.value} key={option.value}>
              {option.name}
            </option>
          );
        })}
      </select>
      <DownArrow />
    </div>
  );
};

SelectBox.defaultProps = {
  options: [],
  renderValue: '',
  name: '',
  labelName: '',
  showLabel: ''
};

SelectBox.propTypes = {
  options: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      values: PropTypes.string
    })
  ).isRequired,
  renderValue: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  labelName: PropTypes.string.isRequired,
  showLabel: PropTypes.bool.isRequired
};

export default SelectBox;
