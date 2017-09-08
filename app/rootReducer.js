import { combineReducers } from 'redux';
import { reducers as apiReducers } from 'redux-api-call';
import { reducer as sessionReducer } from './sessionReducer';
import { reducer as searchReducer } from './searchBar/reducer';

export default combineReducers({
  ...sessionReducer,
  ...apiReducers,
  ...searchReducer,
});
