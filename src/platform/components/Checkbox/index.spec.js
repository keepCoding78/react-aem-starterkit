import React from 'react';
import { shallow } from 'enzyme';
import Checkbox from './index.js';

describe('checkbox', () => {
  test('checkbox should be checked when checked prop is set to true', () => {

    let checkbox = shallow(<Checkbox checked/>);
    
    expect(checkbox).toMatchSnapshot()  
  })

  test('checkbox should be unchecked when checked prop is set to false', () => {

    let checkbox = shallow(<Checkbox checked={false}/>);
    
    expect(checkbox).toMatchSnapshot()  
  })
})
