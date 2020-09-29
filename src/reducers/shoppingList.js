import { ADD_TO_SHOPPINGLIST } from '../actions/recipes';

const initialState = {
  shoppingList: [],
};

const reducerShoppingList = (state = initialState, action = {}) => {
  switch (action.type) {
    case ADD_TO_SHOPPINGLIST:
      return {
        ...state,
        list: [...state.shoppingList, action.payload],
        // == Action.payload sera la liste des ingrédients récupérer de la recette
      };
    default:
      return state;
  }
};

export default reducerShoppingList;
