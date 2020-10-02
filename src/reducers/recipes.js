import {
  FETCH_RECIPES_ERROR,
  FETCH_RECIPES_SUCCESS,
} from '../actions/recipes';

export const initialState = {
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
    case FETCH_RECIPES_SUCCESS:
      return {
        ...state,
        list: [...action.payload],
        error: null,
      };
    default:
      return state;
  }
};

export default reducerrecipes;
