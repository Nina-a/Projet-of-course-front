import axios from 'axios';
import {
  FETCH_RECIPES, fetchRecipesSuccess, fetchRecipesError, ADD_RECIPES,
} from '../actions/recipes';

export default (store) => (next) => (action) => {
  next(action);
  const { dispatch } = store;
  switch (action.type) {
    case FETCH_RECIPES:
      // Je lance la requête axios
      axios({
        method: 'get',
        url: 'http://18.209.180.210/api/recipe/list',
      }).then((res) => {
        const { data } = res;
        console.log(data);
        dispatch(fetchRecipesSuccess(data));
      })
        .catch(() => {
          // sinon je veux afficher une erreur si la requête n'aboutit pas
          dispatch(fetchRecipesError());
        });
      break;
    case ADD_RECIPES:
      axios({
        method: 'post',
        url: 'http://18.209.180.210/api/user/new',
        data:
          {
            name: 'poulet à la crème',
            email: 'poulet@poulet',
            password: 'poulet',
            avatar: 'https://lorempixel.com/200/200/?69748',
            pseudo: 'moi',
            role: 'user',
          },
      })
        .then((res) => {
          const serveurReponse = res.data;
          console.log(serveurReponse);
        });
      break;
    default:
      break;
  }
};
