import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
import {
  middleware as apiMiddleware,
  reducers as apiReducers,
} from 'redux-api-call';
import thunkMiddleware from 'redux-thunk';
// import rootReducer from './rootReducer';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const createReduxStore = () => {
  return createStore(
    combineReducers({
      ...apiReducers,
    }),
    {},
    composeEnhancers(applyMiddleware(thunkMiddleware, apiMiddleware))
  );
};

export const store = createReduxStore();
