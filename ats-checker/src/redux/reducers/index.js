import { combineReducers } from 'redux';
import authReducer from './authReducer';
import atsReducer from './atsReducer';

const rootReducer = combineReducers({
  auth: authReducer,
  ats: atsReducer,
});

export default rootReducer;
