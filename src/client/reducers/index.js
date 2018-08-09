import { combineReducers } from 'redux';
import user from './userReducer';
import reg from './registeredReducer';

export default combineReducers({
  user,
  reg
});
