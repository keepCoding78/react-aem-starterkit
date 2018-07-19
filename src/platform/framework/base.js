import React from 'react';
import { render } from 'react-dom';
import { getComponentNameFromNode } from './utils';
import log from 'loglevel';

/**
 * @class
 * @classdesc Base class provides all the plumbing functions from React/Redux required to render components
 */
class Framework {
  constructor() {
    // Component catalog of registered components with reference to their React Classes
    this.registeredComponents = {};
  }

  /**
   * Registers' components that are used in this application.
   * @param {string} Component's name
   * @param {Class} Component's Class definition
   */
  register(compName, compMethod) {
    this.registeredComponents[compName] = compMethod;
    log.info(`Framework: New component registered - ${compName}`);
    return this;
  }

  /**
   * Renders the @param with React using render().
   * Handles CSR.
   * @param {object} Component
   */
  renderComponentWithData(component) {
    const { ComponentClass, props, store, Provider, node } = component;
    log.info(`Framework: Rendering component ${ComponentClass.name}`, component);

    try {
      if (
        store &&
        Provider &&
        (this.isAppComponent(ComponentClass) ||
          ComponentClass.forceProvider ||
          ComponentClass.name.toLowerCase() === 'connect')
      ) {
        render(
          <Provider store={store}>
            <ComponentClass {...props} />
          </Provider>,
          node
        );
      } else {
        render(<ComponentClass {...props} />, node);
      }
      return this;
    } catch (error) {
      log.error('Framework: Component rendering failed', component, error);
    }
  }

  /**
   * Return component class reference from component catalog
   * @param {object} node Component wrapper HTML element
   */
  getComponentClass(node) {
    let ComponentName = getComponentNameFromNode(node);
    return this.registeredComponents[ComponentName];
  }

  isRegisteredComponent = component => {
    return this.registeredComponents[component] ? true : false;
  };

  isAppComponent = ComponentClass => {
    return ComponentClass.name === 'App';
  };
}

export default Framework;