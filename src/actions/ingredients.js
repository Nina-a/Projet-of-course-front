export const FETCH_INGREDIENT_SUCCESS = 'FETCH_INGREDIENT_SUCCESS';
export const FETCH_INGREDIENT = 'FETCH_INGREDIENT';

export const fetchIngredient= () => ({
  type: FETCH_INGREDIENT,
});

export const fetchIngredientSuccess = (categories)=> ({
  type: FETCH_INGREDIENT_SUCCESS,
  payload: categories,
});
