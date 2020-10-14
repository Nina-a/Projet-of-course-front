import { } from '../actions';
import { ADD_RECIPE_CHANGE_FIELD } from '../actions/recipes';

const initialState = {
  title: '',
  subtitle: '',
  category: '',
  ingredient: '',
  description: '',
  servings: '',
};

const recipeForm = (state = initialState, action = {}) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default recipeForm;
