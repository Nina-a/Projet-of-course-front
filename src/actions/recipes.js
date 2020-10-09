export const FETCH_RECIPES = 'FETCH_RECIPES';
export const FETCH_RECIPES_SUCCESS = 'FETCH_RECIPES_SUCCESS';
export const FETCH_RECIPES_ERROR = 'FETCH_RECIPES_ERROR';
export const ADD_RECIPE = 'ADD_RECIPE';
export const UPDATE_RECIPE = 'UPDATE_RECIPE';
export const ADD_RECIPE_SUBMIT = 'ADD_RECIPE_SUBMIT';
export const ADD_RECIPE_CHANGE_FIELD = 'ADD_RECIPE_CHANGE_FIELD';
export const ADD_TO_SHOPPINGLIST = 'ADD_TO_SHOPPINGLIST';
export const ADD_TO_PLANNING = 'ADD_TO_PLANNING';
export const ADD_TO_RECIPE = 'ADD_TO_RECIPE ';
export const ADD_RECIPE_SUCCESS = 'ADD_RECIPE_SUCCESS';
export const ADD_RECIPE_ERROR = 'ADD_RECIPE_ERROR';
export const ADD_RECIPE_INPUT_SUBMIT = 'ADD_RECIPE_INPUT_SUBMIT';

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

export const addToPlanning = (title, value, category) => ({
  type: ADD_TO_PLANNING,
  title,
  value,
  category,
});

export const addToRecipe = (formData) => ({
  type: ADD_TO_RECIPE
});

export const addRecipeSuccess = () => ({
  type: ADD_RECIPE_SUCCESS,
});

export const addRecipeError = () => ({
  type: ADD_RECIPE_ERROR,
});

export const addRecipe = (payload) => ({
  type: ADD_RECIPE,
  payload,
});

export const updateRecipe = () => ({
  type: UPDATE_RECIPE,
});
