import React, { Component, Fragment } from 'react';

class App extends Component {
  render() {
    return (
      <Fragment>
        {this.props.children['*'].map(({ ComponentClass, props }, index) => <ComponentClass {...props} key={index} />)}
      </Fragment>
    );
  }
}
App.forceProvider = true;

export default App;
