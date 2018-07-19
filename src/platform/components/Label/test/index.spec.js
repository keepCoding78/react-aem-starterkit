
import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Label from '../index';

configure({ adapter: new Adapter() });

const mockLabel = (
  <label className="mockClass"></label>
);

describe('Label', () => {
  it('should render correctly', () => {
    expect(shallow(<Label />).exists(mockLabel)).toBe(true);
  });
});
