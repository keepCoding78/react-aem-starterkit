import { Framework, init } from '../../platform/framework';
import log from 'loglevel';

// Import containers
import LoginApp from './App';

// set log level
log.enableAll();

// Create instance of framework
const FrameworkIns = new Framework();

// Register components
FrameworkIns.register('OktaLogin', LoginApp);

// Get appConfig & initia state from window object
const appConfig = window.__APP_CONFIG__ || {};
const initialState = window.__INITIAL_STATE__ || {};

// Get all component identifier elements
let nodeList = document.querySelectorAll('[data-component]');
log.info('Framework: Component identified in DOM', nodeList);

(async function() {
  // Begin rendering
  init(FrameworkIns, nodeList);
})();
