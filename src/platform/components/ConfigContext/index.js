import React, { Component } from 'react';
import ConfigContext from './createContext';

class ConfigConsumer extends Component {
  addConfigToChildren = context => {
    return React.Children.map(this.props.children, (child, i) => {
      let config = {};
      const id = child.props.id || null;

      if (typeof child.type === 'function' && id && context[id]) {
        config = {
          ...context[id]
        };
        return React.cloneElement(child, { config });
      } else {
        return child;
      }
    });
  };

  render() {
    return <ConfigContext.Consumer>{context => this.addConfigToChildren(context)}</ConfigContext.Consumer>;
  }
}

export {ConfigConsumer as default, ConfigContext};