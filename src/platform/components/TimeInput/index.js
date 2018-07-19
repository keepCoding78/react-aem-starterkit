import React from 'react';
import classnames from 'classnames';
import { MdAccessTime } from 'react-icons/lib/md';
import Label from '../Label';


const DateIcon = ({color}) => ( <MdAccessTime color={color || '#fff'} size="18" /> );

export const InputFeedback = ({ error }) =>
  error ? (
    <div className="input-feedback eta">{error}</div>
  ) : null;

class TimeInput extends React.Component {
  /* based on, mostly from  https://github.com/dima-bu/react-time-input */

  constructor(props) {
    super(props);
    this.state = {
      time: props.initTime || ''
    }
    this.lastVal = '';
    this._input = React.createRef();
  }

  componentDidMount() {
    if (!this.props.disabled && this.props.mountFocus) {
      setTimeout(()=> {
      this._input.focus();
      }, 0);
    }
  }

  componentDidUpdate(){
    if (this.props.mountFocus) {
      setTimeout(()=> {
        this._input.focus();
      }, 0);
    }
  }

  componentWillReceiveProps (nextProps) {
    if (nextProps.initTime) {
      this.onChangeHandler(nextProps.initTime);
    }
  }

  wrapperClasses = (classes, error) => {
    return classnames(
      {
        'error': !!error,
      },
      classes
    )
  }

  isValid (val) {
    // let letterArr = val.split(':').join('').split(''),
    const regexp = /^\d{0,2}?:?\d{0,2}$/;
    let valArr = [];
  
    const [hoursStr, minutesStr] = val.split(':')
  
    if (!regexp.test(val)) {
      return false;
    }
  
    const hours = Number(hoursStr)
    const minutes = Number(minutesStr)
  
    const isValidHour = (hour) => Number.isInteger(hours) && hours >= 0 && hours < 24
    const isValidMinutes = (minutes) => (Number.isInteger(minutes) && hours >= 0 && hours < 24) || Number.isNaN(minutes)
    if (!isValidHour(hours) || !isValidMinutes(minutes)) {
      return false;
    }
  
    if (minutes< 10 && Number(minutesStr[0]) > 5) {
      return false;
    }
  
    if (valArr.indexOf(':')) {
      valArr = val.split(':');
    } else {
      valArr.push(val);
    }
  
    // check mm and HH
    if (valArr[0] && valArr[0].length && (parseInt(valArr[0], 10) < 0 || parseInt(valArr[0], 10) > 23)) {
      return false;
    }
  
    if (valArr[1] && valArr[1].length && (parseInt(valArr[1], 10) < 0 || parseInt(valArr[1], 10) > 59)) {
      return false;
    }
  
    return true;
  }
  
  // onChangeHandler (val) {
  onChangeHandler (evt) {
    let val = evt.target.value;
    if (val === this.state.time) {
      return;
    }
  
    if (this.isValid(val)) {
      if (val.length === 2 && this.lastVal.length !== 3 && val.indexOf(':') === -1) {
        val = val + ':';
      }
  
      if (val.length === 2 && this.lastVal.length === 3) {
        val = val.slice(0, 1);
      }
  
      if (val.length > 5) {
        return false;
      }
  
      this.lastVal = val;
  
      this.setState({
        time: val
      });
  
      if (val.length === 5) {
        // this.props.onChange(val);
        this.setState({
          time: val
        });
      }
      this.props.onChange(evt);
    }
  
  }
  
  getType() {
    if (this.props.type) {
      return this.props.type;
    }
    return 'tel';
  }

  render() {
    const { id, label, error,
      labelclasses, classes, iconColor,
      inputClassName, placeholder,
      ariaLabel } = this.props;
    
    return (
      <div className={this.wrapperClasses(classes, error)}>
        <Label htmlFor={id} error={error} className={labelclasses}>
          {label}
        </Label>
        <input
          id={id}
          name={(this.props.name) ? this.props.name : undefined}
          className={inputClassName}
          type={this.getType()}
          disabled={this.props.disabled}
          placeholder={placeholder}
          value={this.state.time}
          onChange = {(evt) => this.onChangeHandler(evt)}
          onFocus={(this.props.onFocus) ? (evt) => this.props.onFocus(evt) : undefined}
          onBlur={(this.props.onBlur) ? (evt) => this.props.onBlur(evt) : undefined}
          aria-label={ariaLabel}
          ref={this._input}
        />
        <span className="icon-wrapper">
          <DateIcon color={iconColor} />
        </span>
        <InputFeedback error={error} />
      </div>
    )
  }
};


TimeInput.defaultProps = {
  inputClassName: 'input-field',
  ariaLabel: 'input',
}

export default TimeInput;