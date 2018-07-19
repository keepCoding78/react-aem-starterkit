import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import { Security, SecureRoute, ImplicitCallback } from '@okta/okta-react';
import Login from './containers/Login';
import { Auth } from '../common/okta';
import { getAppConfig } from '../common/utilities/';

class App extends Component {
  render() {

    const path = getAppConfig('server').path;
    const { entry: login, redirectAfterLogout } = getAppConfig('login');
    const loginPath = login;
    const loginBaseUrl = getAppConfig('oktaOIDC').issuer;
    const implicitCallbackPath = getAppConfig('oktaOIDC').redirect_uri;
    const logoutPath = loginPath + '/logout';

    return (
      <Fragment>
        <Router forceRefresh basename={path}>
          <Security auth={Auth}>
            <Switch>
              <Route
                exact
                path={loginPath}
                component={() => {
                  return <Login {...this.props} baseUrl={ loginBaseUrl } />;
                }}
              />
              <Route exact path={ implicitCallbackPath } component={ ImplicitCallback } />
              <SecureRoute
                exact
                path={ logoutPath }
                component={() => {
                  Auth.logout();
                  return <Redirect to={ redirectAfterLogout } />;
                }}
              />
            </Switch>
          </Security>
        </Router>
      </Fragment>
    );
  }
}

export default App;
