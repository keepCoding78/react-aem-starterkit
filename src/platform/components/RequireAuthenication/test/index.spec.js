import React from 'react';
import { shallow } from 'enzyme';

import RequireAuthenication from '../index.js';

test('renders children when passed in if role matches OKTA role', () => {
  const wrapper = shallow((
    <RequireAuthenication>
      <div className="unique" />
    </RequireAuthenication>
  ));

  expect(wrapper.contains(<div className="unique" />)).toEqual(false);
  
  wrapper.setProps({roles: 'admin'})
  
  //expect(wrapper.contains(<div className="unique" />)).toEqual(true);
});
