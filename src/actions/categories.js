export const FETCH_CATEGORIES_SUCCESS = 'FETCH_CATEGORIES_SUCCESS';
export const FETCH_CATEGORIES = 'FETCH_CATEGORIES';

export const fetchCategories = () => ({
  type: FETCH_CATEGORIES,
});

export const fetchCategoriesSuccess = (categories)=> ({
  type: FETCH_CATEGORIES_SUCCESS,
  payload: categories,
});
