import { combineReducers } from 'redux';
import counter from './counter';
import reducerrecipes from './recipes';
import planning from './planning';

export default combineReducers({
  counter,
  reducerrecipes,
  planning,
});
