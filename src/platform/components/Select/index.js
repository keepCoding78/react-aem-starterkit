import React from 'react';
import PropTypes from 'prop-types';
import { MdArrowDropDown } from 'react-icons/lib/md/';
import classnames from 'classnames';

import Label from '../Label';


export const DownArrow = ({arrowColor}) => ( <MdArrowDropDown color={arrowColor} size="20" className="down-arrow"/> );

export const SelectFeedback = ({ error }) =>
  error ? (
    <div className="select-feedback eta">{error}</div>
  ) : null;

class Select extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      selectedValue: props.initialValue || '',
    }
  }

  makeOption = (option) => (
    <option key={option.value} value={option.value}>{option.label}</option>
  );

  handleChange = (event) => {
    this.props.onChange(event.target.id, event.target.value);
    this.setState({ selectedValue: event.target.value });
    event.preventDefault();
  };
  
  handleBlur = (event) => {
    this.props.onBlur(this.props.id, true);
    event.preventDefault();
  };
  
  render() {
    const { id, label, error, value, classes, labelclasses, placeholder, onBlur, ariaLabel, className, arrowColor } = this.props;
    const wrapperClasses = classnames({'error': !!error,}, classes);
    
    return (
      <div className={wrapperClasses}>
        <Label htmlFor={id} error={error} className={labelclasses} aria-label={ariaLabel}>
          {label}
        </Label>
        <select
          id={id}
          name={id}
          component="select"
          className={className ? className :"dropdown"}
          onChange={this.handleChange}
          onBlur={onBlur && this.handleBlur}
          value={this.state.selectedValue}
        >
          {placeholder && <option value="" defaultValue>{placeholder}</option>}
          { value.map(this.makeOption) }
        </select>
        <DownArrow arrowColor={arrowColor}/>
        <SelectFeedback error={error} />
      </div>
    );
  }
}

Select.propTypes = {
  value: PropTypes.arrayOf(String),
};

export default Select;