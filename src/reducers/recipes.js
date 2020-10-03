import {
  FETCH_RECIPES_ERROR,
  FETCH_RECIPES_SUCCESS,
  SHOW_TAB,
} from '../actions/recipes';

export const initialState = {
  list: [],
  error: null,
  loading: false,
  tab: false,
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
    case SHOW_TAB:
      return {
        ...state,
        tab: true,
      };
    default:
      return state;
  }
};

export default reducerrecipes;
