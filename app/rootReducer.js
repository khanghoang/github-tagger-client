import { combineReducers } from 'redux';
import { reducers as apiReducers } from 'redux-api-call';
import { reducer as sessionReducer } from './sessionReducer';
import { reducer as searchReducer } from './searchBar/reducer';
import { reducer as modalReducer } from '@khanghoang/redux-modal';

export default combineReducers({
  ...sessionReducer,
  ...apiReducers,
  ...searchReducer,
  ...modalReducer,
});
