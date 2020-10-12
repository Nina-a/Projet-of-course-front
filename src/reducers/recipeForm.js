import { } from '../actions';
import { ADD_RECIPE_CHANGE_FIELD } from '../actions/recipes';

const initialState = {
  title: '',
  subtitle: '',
  description: '',
  servings: '',
};

const recipeForm = (state = initialState, action = {}) => {
  switch (action.type) {
    case ADD_RECIPE_CHANGE_FIELD:
      return {
        ...state,
        ...action.payload,
      };
    default:
      return state;
  }
};

export default recipeForm;
