import { combineReducers } from 'redux';
import runtime from './runtime';
import counter from './counter'

export default combineReducers({
  runtime, counter
});
