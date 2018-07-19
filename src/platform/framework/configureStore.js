import { createStore, applyMiddleware, compose } from 'redux';
import { createLogger } from 'redux-logger';

const loggerMiddleware = createLogger();
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

/**
 * createstore with middleware
 */
const configureStore = (reducers, preState, middlewares) => {
  if (process.env.NODE_ENV === 'test') {
    return createStore(reducers, preState, composeEnhancers(applyMiddleware(...middlewares)));
  } else {
    return createStore(reducers, preState, composeEnhancers(applyMiddleware(...middlewares, loggerMiddleware)));
  }
};

export default configureStore;
