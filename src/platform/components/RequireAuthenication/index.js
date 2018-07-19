import React, { Component, Fragment } from 'react';
import { withAuth } from '@okta/okta-react';
import log from 'loglevel';

import PropTypes from 'prop-types';

// set log level
log.enableAll();

class RequireAuthenication extends Component {
  constructor(props) {
    super(props);
    this.state = { authenticated: null, hasRole: false };

  }

  async componentDidMount() {
    this.checkAuthentication();
  }

  async componentDidUpdate() {
    this.checkAuthentication();
  }

  async checkAuthentication() {
    const authenticated = await this.props.auth.isAuthenticated();
    if (authenticated !== this.state.authenticated) {
      if (authenticated && !this.state.userinfo) {
        const userinfo = await this.props.auth.getUser();
        this.setState({ authenticated, userinfo, hasRole: this.hasRoles(userinfo) });
      } else {
        this.setState({ authenticated });
      }
    }
  }

  hasRoles(userinfo){

    let hasRole = false;

    try {

      hasRole = this.props.roles.split(',').some(role => role == userinfo.access_role);

    }
    catch(e){
      log.error(e);
    }

    return hasRole; 

  }

  render() {
    return (
      <Fragment>
        {this.state.authenticated === true && this.state.hasRole && this.props.children}
      </Fragment>
    );
  }
}

RequireAuthenication.propTypes = {
  roles: PropTypes.string.isRequired,
}

export default withAuth(RequireAuthenication);
