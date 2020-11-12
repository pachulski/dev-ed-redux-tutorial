import counterReducer from './counter';
import loggedReducer from './isLogged';
import { combineReducers } from 'redux';

const allReducers = combineReducers({
  counter: counterReducer, // we can set any name we want for the key. we can also use destructuring and just leave the value itself
  isLogged: loggedReducer,
});

export default allReducers;
