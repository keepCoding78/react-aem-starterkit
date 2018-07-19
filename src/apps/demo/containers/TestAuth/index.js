import React, { Component, Fragment } from 'react';
import { Router, Route } from 'react-router-dom';

import {RequireAuthenication} from '../../../../platform/components';

class TestAuth extends Component {
  render() {
    return ( 
      <Fragment>
        <h1>anyone can see me</h1>

        <RequireAuthenication roles="admin">
          <h1>I need to be authorized and have a role of admin before you can see me</h1>
        </RequireAuthenication>

        <RequireAuthenication roles="user,admin">
          <h1>I need to be authorized and have a role of admin or user before you can see me</h1>
        </RequireAuthenication>

        <RequireAuthenication roles="sales">
          <h1>I need to be authorized and have a role of sales before you can see me</h1>
        </RequireAuthenication>
      </Fragment>
    )
  }
}

export default TestAuth;
