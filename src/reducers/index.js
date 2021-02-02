import { combineReducers } from 'redux';
import counter from './counter';
import reducerrecipes from './recipes';
import user from './user';
import planning from './planning';
import reducerShoppingList from './shoppingList';
import recipeForm from './recipeForm';
import categories from './category';
import ingredients from './ingredient';
import app from './app';

export default combineReducers({
  counter,
  reducerrecipes,
  user,
  planning,
  reducerShoppingList,
  recipeForm,
  categories,
  ingredients,
  app,
});
