import { ADD_TO_PLANNING } from '../actions/recipes';

const initialState = {
  shoppingList: [],
};

const reducerShoppingList = (state = initialState, action = {}) => {
  switch (action.type) {
    case ADD_TO_PLANNING:
      // ingredient est le tableau recu qui contient les
      const ingredient = action.title.recipeIngredients;
      console.log(ingredient);
      const { length } = ingredient;

      for (let i = 0; i < length; i++) {
        const { id } = ingredient[i].ingredient; // id de l'ingrédient
        const { name } = ingredient[i].ingredient; // nom de l'ingrédient
        const { unit } = ingredient[i].ingredient; // unité de l'ingrédient
        const { quantity } = ingredient[i].ingredient;
        state.shoppingList = {
          id,
          name,
          unit,
          quantity,
        };
        return state.shoppingList;
      }

      console.log(length);
      state.shoppingList = [action.recipeIngredients];

      const groupBy = function (xs, key) {
        return xs.reduce((rv, x) => {
          const tmp = x[key];
          (rv[x[key]] = rv[x[key]] || []).push(x);
          return rv;
        }, {});
      };

      const ss = ingredient.map((e) => e.ingredient);
      const tt = groupBy(ss.flat(), 'id');

      console.log(tt);

      return {
        ...state,
        shoppingList: [...state.shoppingList],
        // == Action.payload sera la liste des ingrédients récupérer de la recette
      };
    default:
      return state;
  }
};

export default reducerShoppingList;
