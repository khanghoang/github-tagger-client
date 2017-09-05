import { middleware as apiMiddleware } from 'redux-api-call';
import { createEpicMiddleware } from 'redux-observable';
import { createStore, applyMiddleware, compose } from 'redux';
import { persistStore, autoRehydrate } from 'redux-persist';
import thunkMiddleware from 'redux-thunk';

import rootEpic from './rootEpic';
import rootReducer from './rootReducer';

const epicMiddleware = createEpicMiddleware(rootEpic);

export const createReduxStore = () => {
  const composeEnhancers =
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  return createStore(
    rootReducer,
    {},
    composeEnhancers(
      applyMiddleware(thunkMiddleware, apiMiddleware, epicMiddleware),
      autoRehydrate()
    )
  );
};

export const store = createReduxStore();

// begin periodically persisting the store
persistStore(store, { whitelist: ['session'] });
