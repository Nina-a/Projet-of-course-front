import { FETCH_INGREDIENT_SUCCESS } from '../actions/ingredients';

const initialState = [];

const ingredient = (state = initialState, action = {}) => {
  switch (action.type) {
    case FETCH_INGREDIENT_SUCCESS:
      return action.payload;
    default:
      return state;
  }
};

export default ingredient;
