import React, { Fragment, Component } from 'react';
import { Auth } from '../../../common/okta';
import TestAuth from '../../containers/TestAuth';
import SecurityProvider from '../../../common/okta';

class NavProfile extends Component {
  constructor(props) {
    super(props);

    this.state = { name: this.props.config.text };

    this.auth = Auth;
  }

  async componentDidMount() {
    this.checkAuthentication();
  }

  async componentDidUpdate() {
    this.checkAuthentication();
  }

  async checkAuthentication() {
    const authenticated = await this.auth.isAuthenticated();
    if (authenticated !== this.state.authenticated) {
      if (authenticated && !this.state.userinfo) {
        const userinfo = await this.auth.getUser();
        this.setState({ authenticated, name: userinfo.name, role: userinfo.access_role });
      } else {
        this.setState({ authenticated });
      }
    }
  }

  render() {
    return (
      <Fragment>
        <hr />
        <a href="#">
          {this.state.name} {this.state.role}
        </a>
        {/*
      <SecurityProvider>
        <TestAuth />
      </SecurityProvider>
      */}
      </Fragment>
    );
  }
}

export default NavProfile;
