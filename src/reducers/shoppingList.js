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
        const { quantity } = action.title.recipeIngredients[i];
        state.shoppingList.push(
          {
            id,
            name,
            unit,
            quantity,
          },
        );
      }

      const groupBy = function (xs, key) {
        return xs.reduce((rv, x) => {
          (rv[x[key]] = rv[x[key]] || []).push(x);
          return rv;
        }, {});
      };

      const shoppingListGroupe = (groupBy(state.shoppingList, 'id'));
      console.log(shoppingListGroupe);
      const shoppingListGroupeEtAdditionne = Object.keys(shoppingListGroupe).map((key) => (
        {
          id: key,
          name: shoppingListGroupe[key][0].name,
          quantity: shoppingListGroupe[key].reduce((acc, curr) => acc + curr.quantity, 0),
          unit: shoppingListGroupe[key][0].unit,
        }));
      console.log(shoppingListGroupeEtAdditionne);
      return {
        ...state,
        shoppingList: [...shoppingListGroupeEtAdditionne],
      };
    }
    // ingredient est le
    // == Action.payload sera la liste des ingrédients récupérer de la recette

    default:
      return state;
  }
};

export default reducerShoppingList;
