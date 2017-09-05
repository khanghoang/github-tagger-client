import { combineReducers } from 'redux';
import { reducers as apiReducers } from 'redux-api-call';
import { reducer as sessionReducer } from './sessionReducer';

export default combineReducers({
  ...sessionReducer,
  ...apiReducers,
});
