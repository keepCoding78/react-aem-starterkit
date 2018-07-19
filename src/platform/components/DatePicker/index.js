import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import momentPropTypes from 'react-moment-proptypes';
import classnames from 'classnames';
import {
  SingleDatePicker,
  SingleDatePickerPhrases,
  SingleDatePickerShape,
  isInclusivelyAfterDay,
  HORIZONTAL_ORIENTATION, ANCHOR_LEFT,
  ICON_AFTER_POSITION,
} from 'react-dates';
import {
  MdToday,
  MdNavigateBefore,
  MdNavigateNext,
} from 'react-icons/lib/md';

import Label from '../Label';

const { date, onDateChange, focused, onFocusChange, ...singleDatePickerShapePropTypes} = SingleDatePickerShape;

const propTypes = {
  // example props for the demo
  autoFocus: PropTypes.bool,
  initialDate: momentPropTypes.momentObj,
  ...singleDatePickerShapePropTypes,
};

const defaultProps = {
  // example props for the demo
  autoFocus: false,
  initialDate: null,

  // input related props
  id: 'date',
  placeholder: 'Date',
  disabled: false,
  required: false,
  screenReaderInputMessage: '',
  showClearDate: false,
  showDefaultInputIcon: false,
  customInputIcon: null,
  block: false,
  small: false,
  regular: false,
  verticalSpacing: undefined,
  keepFocusOnInput: false,

  // passed down from wrapper
  classes: '',
  label: '',
  labelclasses: '',
  error: null,

  // calendar presentation and interaction related props
  renderMonth: null,
  orientation: HORIZONTAL_ORIENTATION,
  anchorDirection: ANCHOR_LEFT,
  horizontalMargin: 0,
  withPortal: false,
  withFullScreenPortal: false,
  initialVisibleMonth: null,
  numberOfMonths: 2,
  keepOpenOnDateSelect: false,
  reopenPickerOnClearDate: false,
  isRTL: false,
  inputIconPosition: ICON_AFTER_POSITION,

  // navigation related props
  navPrev: null,
  navNext: null,
  onPrevMonthClick() {},
  onNextMonthClick() {},
  onClose() {},

  // day presentation and interaction related props
  renderCalendarDay: undefined,
  renderDayContents: null,
  enableOutsideDays: false,
  isDayBlocked: () => false,
  isOutsideRange: (day) => !isInclusivelyAfterDay(day, moment()),
  isDayHighlighted: () => {},

  // internationalization props
  displayFormat: () => moment.localeData().longDateFormat('L'),
  monthFormat: 'MMMM YYYY',
  phrases: SingleDatePickerPhrases,
};

const DateIcon = () => ( <MdToday color="#fff" size="18" /> );
const PrevIcon = () => ( <MdNavigateBefore color="#fff" size="28" /> );
const NextIcon = () => ( <MdNavigateNext color="#fff" size="28" /> );

const InputFeedback = ({ error }) =>
  error ? (
    <div className="input-feedback eta">{error}</div>
  ) : null;

class DatePicker extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      focused: props.autoFocus,
      date: (props.initialDate && moment(props.initialDate)) || null,
    };
  }

  onDateChange = (date) => {
    this.setState({ date });
    this.props.onChange(this.props.id, (date && date.format('YYYY-MM-DD')) || '');
  }

  onFocusChange = ({ focused }) => {
    this.setState({ focused });
    this.props.onBlur(this.props.id, true);
  }

  render() {
    const { focused, date } = this.state;

    // autoFocus and initialDate are helper props for the example wrapper but are not
    // props on the SingleDatePicker itself and thus, have to be omitted;
    // error, label, labelclasses, classes are props passed from the wrapper and should
    // likewise be excluded from being passed to the SingleDatePicker component.
    const { id, label, autoFocus, initialDate, error, onChange, onBlur, labelclasses, classes, ...singleDatePickerProps } = this.props

    const wrapperClasses = classnames(
      {
        'error': !!this.props.error,
      },
      this.props.classes
    );

    return (
      <div className={wrapperClasses}>
        <Label htmlFor={id} error={this.props.error} className={this.props.labelclasses}>
          {this.props.label}
        </Label>
        <SingleDatePicker
          {...singleDatePickerProps}
          id={id}
          date={date}
          focused={focused}
          onDateChange={this.onDateChange}
          onFocusChange={this.onFocusChange}
          numberOfMonths={1}
          customInputIcon={<DateIcon />}
          navPrev={<PrevIcon />}
          navNext={<NextIcon />}
          displayFormat="YYYY-MM-DD"
        />
        <InputFeedback error={this.props.error} />
      </div>
    );
  }
}

DatePicker.propTypes = propTypes;
DatePicker.defaultProps = defaultProps;

export default DatePicker;