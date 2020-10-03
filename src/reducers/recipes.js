import {
  FETCH_RECIPES_ERROR,
  FETCH_RECIPES_SUCCESS,
} from '../actions/recipes';

export const initialState = {
  listEntree: [],
  listPlat: [],
  listDessert: [],
  list: [],
  error: null,
  loading: false,
};

const reducerrecipes = (state = initialState, action = {}) => {
  switch (action.type) {
    case FETCH_RECIPES_ERROR:
      return {
        ...state,
        error: 'Impossible de récupérer les recettes, vérifiez votre connexion',
      };
    case FETCH_RECIPES_SUCCESS: {
      const listRecipes = action.payload;
      //debugger;
      const listEntree = listRecipes.filter((recipeDetail) => {
        const category = recipeDetail.categories[0].id === 1;
        return category;
      });

      const listPlat = listRecipes.filter((recipeDetail) => {
        const category = recipeDetail.categories[0].id === 2;
        return category;
      });

      const listDessert = listRecipes.filter((recipeDetail) => {
        const category = recipeDetail.categories[0].id === 3;
        return category;
      });

      return {
        ...state,
        list: [...action.payload],
        listEntree: [...listEntree],
        listPlat: [...listPlat],
        listDessert: [...listDessert],
        error: null,
      };
    }
    default:
      return state;
  }
};

export default reducerrecipes;
