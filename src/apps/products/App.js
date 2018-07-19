import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router, Switch } from 'react-router-dom';
import { Security, SecureRoute } from '@okta/okta-react';
import { Auth } from '../common/okta';
import { getAppConfig } from '../common/utilities';
import Header from '../common/Header';
import { ToastContainer } from '../../platform/components';

class App extends Component {
  render() {
    const basename = getAppConfig('server').path;
    return (
      <Router basename={basename}>
        <Fragment>
        <Header/>
        <ToastContainer autoClose={getAppConfig('toast').autoClose}/>
          <Security auth={Auth}>
            <Switch>
              <SecureRoute
                exact
                path="/products"
                render={({ match }) =>
                  this.props.children['/products'].map(({ ComponentClass, props }, index) => (
                    <ComponentClass {...props} match={match} key={index} />
                  ))
                }
              />
              <SecureRoute
                path="/products/:Id/:page?"
                render={({ match }) =>
                  this.props.children['/products/:Id'].map(({ ComponentClass, props }, index) => (
                    <ComponentClass {...props} match={match} key={index} />
                  ))
                }
              />
            </Switch>
          </Security>
      </Fragment>
      </Router>
    );
  }
}

export default App;
