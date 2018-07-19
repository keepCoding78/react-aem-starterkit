
import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import TextInput, { InputFeedback } from '../index';
import Label from '../../Label';

configure({ adapter: new Adapter() });

const mockOnChange = jest.fn();

const mockTextInput = (
  <div className="mockWrapperClasses">
    <Label htmlFor="mockId" error="mockError" className="mockLabelclasses">
      "mockLabel"
    </Label>
    <input
      id="mockId"
      className="input-field"
      type="text"
      value="mockValue"
      onChange={mockOnChange}
    />
    <InputFeedback error="mockError" />
  </div>
);

const mockInputFeedback = (
  <div className="input-feedback eta">"mockError"</div>
)

describe('TextInput', () => {
  it('should render correctly', () => {
    expect(shallow(<TextInput />).exists(mockTextInput)).toBe(true);
  });
});

describe('InputFeedback with error', () => {
  it('should render feedback if error exists', () => {
    expect(shallow(<InputFeedback error="mockError" />).exists(mockInputFeedback)).toBe(true);
  });
});

describe('InputFeedback without error', () => {
  it('should return null if no error exists', () => {
    const output = InputFeedback({});
    expect(output).toBeNull();
  });
});
