import { Framework, init, configureStore } from '../../platform/framework';
import log from 'loglevel';

// Import CSS
import 'react-dates/lib/css/_datepicker.css';
import '../../themes/default/apps/contracts/index.css';
import App from './App';
import PLP from './containers/PLP';

// Configure Redux
import { Provider } from 'react-redux';
import combinedReducer from './reducers';

// set log level
log.enableAll();

// Create instance of framework
const FrameworkIns = new Framework();

// Register components
FrameworkIns.register('app', App);
FrameworkIns.register('PLP', PLP);


// Get appConfig & initia state from window object
const appConfig = window.__APP_CONFIG__ || {};
const initialState = window.__INITIAL_STATE__ || {};

// Configure store
let store = configureStore(combinedReducer(), initialState, []);

// Get all component identifier elements
let nodeList = document.querySelectorAll('[data-component]');
log.info('Framework: Component identified in DOM', nodeList);

(async function() {
  // Begin rendering
  init(FrameworkIns, nodeList, store, Provider);
})();
