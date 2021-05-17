export const FETCH_RECIPES = 'FETCH_RECIPES';
export const FETCH_RECIPES_SUCCESS = 'FETCH_RECIPES_SUCCESS';
export const FETCH_RECIPES_ERROR = 'FETCH_RECIPES_ERROR';

export const ADD_TO_SHOPPINGLIST = 'ADD_TO_SHOPPINGLIST';
export const ADD_TO_PLANNING = 'ADD_TO_PLANNING';

// ======================= IMPORT DES RECETTES =================================
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

// ================== ACTIONS LORS DU CHOIX D'UNE RECETTE ============================
// Ajoute au planning et à la liste de course
export const addToPlanning = (title, value, category) => ({
  type: ADD_TO_PLANNING,
  title,
  value,
  category,
});

