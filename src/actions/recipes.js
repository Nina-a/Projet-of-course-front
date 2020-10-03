export const FETCH_RECIPES = 'FETCH_RECIPES';
export const FETCH_RECIPES_SUCCESS = 'FETCH_RECIPES_SUCCESS';
export const FETCH_RECIPES_ERROR = 'FETCH_RECIPES_ERROR';
export const ADD_TO_SHOPPINGLIST = 'ADD_TO_SHOPPINGLIST';
export const ADD_TO_PLANNING = 'ADD_TO_PLANNING';
export const SHOW_TAB = 'SHOW_TAB';

export const fetchRecipes = () => ({
  type: FETCH_RECIPES,
});

export const fetchRecipesSuccess = (payload) => ({
  type: FETCH_RECIPES_SUCCESS,
  payload,
});

export const fetchRecipesError = () => ({
  type: FETCH_RECIPES_ERROR,
});

export const showTab = () => ({
  type: SHOW_TAB,
});
