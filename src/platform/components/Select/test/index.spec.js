
import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Select, { SelectFeedback } from '../index';
import Label from '../../Label';

configure({ adapter: new Adapter() });

const mockOnChange = jest.fn();
const mockOnBlur = jest.fn();

const mockValueArray = [
  { label: 'Longan', value: 'longan' },
  { label: 'Oranges', value: 'oranges' },
  { label: 'Rice', value: 'rice' },
];

const mockSelect = (
  <div className="mockWrapperClasses">
    <Label htmlFor="mockId" error="mockError" className="mockLabelclasses">
      "mockLabel"
    </Label>
    <select
      id="mockId"
      className="input-field"
      type="text"
      value="mockValue"
      onChange={mockOnChange}
      onBlur={mockOnBlur}
    >
      <option value="" defaultValue>MockPlaceholder</option>
      <option value="longan">Longan</option>
      <option value="oranges">Oranges</option>
      <option value="rice">Rice</option>
    </select>
    <SelectFeedback error="mockError" />
  </div>
);

const mockSelectFeedback = (
  <div className="input-feedback eta">"mockError"</div>
)

describe('Select', () => {
  it('should render correctly', () => {
    console.log('---', shallow(<Select value={mockValueArray}/>).exists(mockSelect));
    expect(shallow(<Select value={mockValueArray}/>).exists(mockSelect)).toBe(true);
  });
});

describe('SelectFeedback with error', () => {
  it('should render feedback if error exists', () => {
    expect(shallow(<SelectFeedback error="mockError" />).exists(mockSelectFeedback)).toBe(true);
  });
});

describe('SelectFeedback without error', () => {
  it('should return null if no error exists', () => {
    const output = SelectFeedback({});
    expect(output).toBeNull();
  });
});
