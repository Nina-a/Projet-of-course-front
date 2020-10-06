import { combineReducers } from 'redux';
import counter from './counter';
import reducerrecipes from './recipes';
import user from './user';

export default combineReducers({
  counter,
  reducerrecipes,
  user,
});
