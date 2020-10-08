import { combineReducers } from 'redux';
import counter from './counter';
import reducerrecipes from './recipes';
import user from './user';
import planning from './planning';
import reducerShoppingList from './shoppingList';

export default combineReducers({
  counter,
  reducerrecipes,
  user,
  planning,
  reducerShoppingList,
});
