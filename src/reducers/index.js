import { combineReducers } from 'redux';
import reducerrecipes from './recipes';
import user from './user';
import planning from './planning';
import reducerShoppingList from './shoppingList';
import app from './app';

export default combineReducers({
  reducerrecipes,
  user,
  planning,
  reducerShoppingList,
  app,
});
