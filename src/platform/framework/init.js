import { getPropsFromNode, isValidProps, getConfigFromNodeId, isNestedComponent, isValidConfigObject } from './utils';
import 'babel-polyfill';
import log from 'loglevel';

const getComponentProps = async (app, config) => {
  if (!isValidConfigObject(config)) {
    log.warn('Framework: Config object is invalid', config);
    return false;
  }

  // Remove the routes data from config, no need to pass them as props
  // routes will be passed as children
  const { routes, ...compConfig } = config.data;
  let props = {
    config: compConfig
  };

  if (isNestedComponent(config)) {
    let children = {};
    let routes = config.data.routes || {};

    for (const [route, childrenArray] of Object.entries(routes)) {
      let routeWithChildren = await Promise.all(
        childrenArray.map(async child => {
          const ComponentClass = app.registeredComponents[child.component];

          if (typeof ComponentClass === 'undefined') {
            log.warn('Framework: No registered component found in catalog for this node', child);
            return false;
          }

          let config = await getConfigFromNodeId(child.configId);

          let props = await getComponentProps(app, config);
          if (!isValidProps(props)) {
            log.warn('Framework: Can not extract props from config object', child);
            return false;
          }

          return {
            ComponentClass,
            props
          };
        })
      );
      if (Array.isArray(routeWithChildren) && routeWithChildren.length > 0) {
        children[route] = routeWithChildren;
      }
    }
    props['children'] = children;
  }
  return props;
};

async function mountComponent(app, node, store, Provider) {
  try {
    // Get component id from node
    const componentId = node.dataset.componentid || null;

    // Get component class name from node and check if it exist in component registry
    const ComponentClass = app.getComponentClass(node);
    if (!ComponentClass) throw ('Framework: No registered component found in catalog for this node', node);

    // Check if render flag exist and set to false, otherwise consider it as a renderable component
    const isRender = !node.dataset.render || node.dataset.render !== 'false' || false;
    // If render flag is false, skip component rendering
    if (!isRender) {
      log.info(`Framework: Skipping component rendering, isRender is ${isRender}`, node);
      return false;
    }

    // Get component config from node
    const config = await getPropsFromNode(node);

    const props = await getComponentProps(app, config);
    if (!isValidProps(props)) throw ('Framework: Can not extract props from config object', node);

    // Render component using ReactDOM.render
    if (ComponentClass && isRender) {
      app.renderComponentWithData({
        componentId,
        ComponentClass,
        props,
        node,
        store,
        Provider
      });
    }
  } catch (error) {
    log.error('Framework: Component mount failed', error);
  }
}

const init = async (app, nodeList, store = null, Provider = null) => {
  // Loop through each component and mount
  await Promise.all(
    [...nodeList].map(async node => {
      await mountComponent(app, node, store, Provider);
    })
  );
};

export default init;
