import { ADD_TO_PLANNING } from '../actions/recipes';

const initialState = {
  shoppingList: [],
};

const reducerShoppingList = (state = initialState, action = {}) => {
  switch (action.type) {
    case ADD_TO_PLANNING: {
      // tableau recu qui contient les
      const ingredient = action.title.recipeIngredients;
      const { length } = ingredient;

      for (let i = 0; i < length; i++) {
        const { id } = ingredient[i].ingredient; // id de l'ingrédient
        const { name } = ingredient[i].ingredient; // nom de l'ingrédient
        const { unit } = ingredient[i].ingredient; // unité de l'ingrédient
        const { quantity } = ingredient[i].ingredient;
        state.shoppingList.push(
          {
            id,
            name,
            unit,
            quantity,
          },
        );
      }

      return state;
    }
    // ingredient est le
    // == Action.payload sera la liste des ingrédients récupérer de la recette

    default:
      return state;
  }
};

export default reducerShoppingList;
