import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
import {
  middleware as apiMiddleware,
} from 'redux-api-call';
import thunkMiddleware from 'redux-thunk';
import rootReducer from './rootReducer';

export const createReduxStore = () => {
  const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  return createStore(
    rootReducer,
    {},
    composeEnhancers(applyMiddleware(thunkMiddleware, apiMiddleware))
  );
};

export const store = createReduxStore();
