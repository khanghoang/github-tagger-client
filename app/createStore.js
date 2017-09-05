import { createStore, applyMiddleware, compose } from 'redux';
import { middleware as apiMiddleware } from 'redux-api-call';
import thunkMiddleware from 'redux-thunk';
// import rootReducer from './rootReducer';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const createReduxStore = () => {
  return createStore(
    () => ({}),
    {},
    composeEnhancers(applyMiddleware(thunkMiddleware, apiMiddleware))
  );
};

export const store = createReduxStore();
