export const FETCH_INGREDIENTS = 'FETCH_INGREDIENTS';
export const FETCH_INGREDIENTS_SUCCES = 'FETCH_INGREDIENTS_SUCCES';
export const FETCH_INGREDIENTS_ERROR = 'FETCH_INGREDIENTS_ERROR';

// ======================= IMPORT DES INGREDIENTS =================================
export const fetchIngredients = () => ({
  type: FETCH_INGREDIENTS,
});

export const fetchIngredientsSuccess = ( payload ) => ({
  type: FETCH_INGREDIENTS_SUCCES,
  payload
});

export const fetchIngredientsError = () => ({
  type: FETCH_INGREDIENTS_SUCCES,
});
