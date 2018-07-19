import React, { Component } from 'react';
import { BrowserRouter as Router, Switch } from 'react-router-dom';
import { Security, SecureRoute } from '@okta/okta-react';
import { Auth } from '../common/okta';

class App extends Component {
  render() {
    return (
      <Router>
        <Security auth={Auth}>
          <Switch>
            <SecureRoute
              exact={true}
              path="/demo/"
              render={({ match }) =>
                this.props.children['/demo/'].map(({ ComponentClass, props }, index) => (
                  <ComponentClass {...props} match={match} key={index} />
                ))
              }
            />
            <SecureRoute
              path="/demo/:Id"
              render={({ match }) =>
                this.props.children['/demo/:Id'].map(({ ComponentClass, props }, index) => (
                  <ComponentClass {...props} match={match} key={index} />
                ))
              }
            />
          </Switch>
        </Security>
      </Router>
    );
  }
}

export default App;
