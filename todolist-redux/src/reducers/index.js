import todos from './todos';
import setFilter from './setfilter';
import error from './error';
import lists from './lists'

import  { combineReducers } from 'redux';

export default combineReducers({
  //SINTASSI ES6 CORTA
  todos,
  setFilter,
  error,
  lists
})
  /*
  LUNGA:
  todos:todos,
  setFilter:setFilter,
  error: error
  lists: lists
  */
