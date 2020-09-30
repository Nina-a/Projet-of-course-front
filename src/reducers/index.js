import { combineReducers } from 'redux';
import counter from './counter';
import reducerrecipes from './recipes';

export default combineReducers({
  counter,
  reducerrecipes,
});
