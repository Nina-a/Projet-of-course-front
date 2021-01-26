import axios from 'axios';
import {
  FETCH_RECIPES,
  fetchRecipesSuccess,
  fetchRecipesError,
} from '../actions/recipes';

export default (store) => (next) => (action) => {
  next(action);
  const { dispatch } = store;
  switch (action.type) {
    case FETCH_RECIPES:
      // Je lance la requête axios
      axios({
        method: 'get',
        url: 'http://of-course-back/public/recipes',
      })
        .then((res) => {
          const { data } = res;
          dispatch(fetchRecipesSuccess(data));
        })
        .catch(() => {
          // sinon je veux afficher une erreur si la requête n'aboutit pas
          dispatch(fetchRecipesError());
        });
      break;

    default:
      // console.log('default');
      break;
  }
};
