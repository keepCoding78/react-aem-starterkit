import { Framework, init, configureStore } from '../../platform/framework';
import log from 'loglevel';

// Import CSS
import '../../themes/default/apps/contracts/index.css';

// Import components
import AppA from './AppWithChildren';
import AppB from './AppWithRoutes';
import NavProfile from './components/NavProfile';
import Heading from './components/Heading';
import NotificationList from './containers/NotificationList';
import NotificationCount from './containers/NotificationCount';
import ContractList from './containers/ContractList';
import ContractDetail from './containers/ContractDetail';
import ContractOverview  from './components/ContractOverview';
import ContractPayments from './components/ContractPayments';

// Configure Redux
import { Provider } from 'react-redux';
import combinedReducer from './reducers';

// set log level
log.enableAll();

// Create instance of framework
const FrameworkIns = new Framework();

// Register components
FrameworkIns.register('AppA', AppA);
FrameworkIns.register('AppB', AppB);
FrameworkIns.register('NavProfile', NavProfile);
FrameworkIns.register('Heading', Heading);
FrameworkIns.register('NotificationList', NotificationList);
FrameworkIns.register('NotificationCount', NotificationCount);
FrameworkIns.register('ContractList', ContractList);
FrameworkIns.register('ContractDetail', ContractDetail);
FrameworkIns.register('ContractOverview', ContractOverview);
FrameworkIns.register('ContractPayments', ContractPayments);

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
  await init(FrameworkIns, nodeList, store, Provider);
})();
