import { combineReducers } from 'redux';
import counter from './counter';
import reducerrecipes from './recipes';
import planning from './planning';
import reducerShoppingList from './shoppingList';

export default combineReducers({
  counter,
  reducerrecipes,
  planning,
  reducerShoppingList,
});
