import React, { Component, Children } from 'react';
import PropTypes from 'prop-types';
import { Auth } from '../index';

class SecurityProvider extends Component {
  getChildContext() {
    return { auth: Auth };
  }

  render() {
    // `Children.only` enables us not to add a <div /> for nothing
    return Children.only(this.props.children);
  }
}

SecurityProvider.propTypes = {
  auth: PropTypes.object.isRequired
};

SecurityProvider.childContextTypes = {
  auth: PropTypes.object.isRequired
};

export default SecurityProvider;
