/**
 * Provides utility functions which can be used
 * throughout the framework and app.
 */

// returns a value or empty object
const noop = function(state = {}) {
  return state;
};

//fetches data from url (data-path)
const fetchFromUrl = url => {
  return fetch(url, {
    credentials: 'include'
  }).then(response => {
    if (response.ok) {
      return response.json();
    }
  });
};

// Fetches data from a dom-node (script tag)
const fetchFromDom = node => {
  return new Promise((resolve, reject) => {
    try {
      const el = document.getElementById(node);
      resolve(el ? JSON.parse(el.innerHTML) : {});
    } catch (e) {
      reject(`Cannot retrieve data from DOM ${node} : ${e}`);
    }
  });
};

/**
 * @param {elements} Component identifier HTML element
 */
const getDataFromNode = async (node, fetchFrom = fetchFromDom) => {
  return fetchFromDom(node.dataset.config);
};

const getPropsFromNode = async (node, attr = 'config') => {
  return new Promise((resolve, reject) => {
    try {
      const el = document.getElementById(node.dataset[attr]);
      resolve(el ? JSON.parse(el.innerHTML) : {});
    } catch (e) {
      reject(`Cannot retrieve data from DOM ${node} : ${e}`);
    }
  });
};

const getConfigFromNodeId = async id => {
  return new Promise((resolve, reject) => {
    try {
      const el = document.getElementById(id);
      resolve(el ? JSON.parse(el.innerHTML) : {});
    } catch (e) {
      reject(`Cannot retrieve data from DOM ${id} : ${e}`);
    }
  });
};

const getPropsFromObject = async (node, obj) => {
  return new Promise((resolve, reject) => {
    try {
      const id = node.dataset.id;
      resolve(obj[id] ? obj[id].props : {});
    } catch (e) {
      reject(`Cannot retrieve data from DOM ${node} : ${e}`);
    }
  });
};

const isNestedComponent = config => {
  return config.data && config.data.componentType === 'nested' ? true : false;
};

const isValidConfigObject = config => {
  return config.data || config.error ? true : false;
};

const isValidProps = props => {
  return props && typeof props !== 'undefined' ? true : false;
};

/**
 * Returns the component name from data-role attribute
 * @param {object} node Component wrapper HTML element
 */
const getComponentNameFromNode = node => {
  return node.dataset.component; // get Component name
};

export {
  noop,
  getPropsFromNode,
  getPropsFromObject,
  getConfigFromNodeId,
  isNestedComponent,
  isValidConfigObject,
  isValidProps,
  fetchFromUrl,
  fetchFromDom,
  getDataFromNode,
  getComponentNameFromNode
};
