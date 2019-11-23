import todos from './todos';
import setFilter from './setfilter';
import error from './error';

import  { combineReducers } from 'redux';

export default combineReducers({
  //SINTASSI ES6 CORTA
  todos,
  setFilter,
  error,

  /*
  LUNGA:
  todos:todos,
  setFilter:setFilter,
  error: error
  */
})