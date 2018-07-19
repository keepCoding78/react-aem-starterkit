import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import SignInWidget from './OktaSignInWidget';
import { withAuth } from '@okta/okta-react';
import { getAppConfig } from '../../../common/utilities';

class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      authenticated: null,
      redirectAfterLogin: getAppConfig('login').redirectAfterLogin
    };

    this.setReferrerKey();
    this.checkAuthentication();
  }

  checkAuthentication = async () => {
    const authenticated = await this.props.auth.isAuthenticated();
    if (authenticated !== this.state.authenticated) {
      this.setState({ authenticated });
    }
  };

  componentDidUpdate = () => {
    this.checkAuthentication();
  }

  setReferrerKey = () => {
    const referrerKey = 'secureRouterReferrerPath';
    if (localStorage && !localStorage.getItem(referrerKey)) {
      localStorage.setItem(referrerKey, this.state.redirectAfterLogin);
    }
  }

  onSuccess = res => {
    return this.props.auth.redirect({
      sessionToken: res.session.token
    });
  };

  onError = err => {
    console.log('error logging in', err);
  };

  render() {
    if (this.state.authenticated === null) return null;
    return this.state.authenticated ? (
      <Redirect to={{ pathname: this.state.redirectAfterLogin }} />
    ) : (
      <SignInWidget baseUrl={this.props.baseUrl} i18n={this.props.config.i18n} logo={this.props.config.logo} onSuccess={this.onSuccess} onError={this.onError} />
    );
  }
}

export default withAuth(Login);
