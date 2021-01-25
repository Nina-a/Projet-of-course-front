import axios from 'axios';
import {
  FETCH_RECIPES,
  fetchRecipesSuccess,
  fetchRecipesError,
  ADD_RECIPE,
  addRecipeSuccess,
  addRecipeError,
} from '../actions/recipes';
import {
  FETCH_CATEGORIES,
  fetchCategoriesSuccess,
} from '../actions/categories';
import {
  FETCH_INGREDIENT,
  fetchIngredientSuccess,
} from '../actions/ingredients';
import {
  LOGIN_INPUT_SUBMIT,
  CHECK_AUTH,
  LOGIN_INPUT_LOGOUT,
  loginSuccess,
  loginError,
  logoutSuccess,
  logoutError,
  REGISTER_INPUT_SUBMIT,
  registerSuccess,
  registerError,
} from '../actions/user';

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
          console.log(data);
          dispatch(fetchRecipesSuccess(data));
        })
        .catch(() => {
          // sinon je veux afficher une erreur si la requête n'aboutit pas
          dispatch(fetchRecipesError());
        });
      break;

    case ADD_RECIPE:
      // https://flaviocopes.com/axios-send-authorization-header/
      axios
        .post(
          'http://18.209.180.210/api/add/recipe',
          {
            ...action.payload,
            private: true,
            user: 25,
          },
          {
            headers: {
              // Authorization: `Bearer ${store.getState().user.token}`,
              Authorization: `Bearer ${
                JSON.parse(localStorage.getItem('user')).token
              }`,
            },
          }
        )
        .then((res) => {
          const serverResponse = res.data;
          // console.log(serverResponse);
          dispatch(addRecipeSuccess(serverResponse));
          // Retour du serveur avec les infos de la recette
        })
        .catch((err) => {
          console.error(err);
          dispatch(addRecipeError());
          // En cas d'échec de la sauvegarde dans la data, le serveur retourne une erreur
        });
      break;

    case FETCH_CATEGORIES:
      axios({
        method: 'get',
        url: 'http://18.209.180.210/api/categorie/list',
      }).then((res) => {
        const serverResponse = res.data;
        dispatch(fetchCategoriesSuccess(serverResponse));
      });
      break;

    case FETCH_INGREDIENT:
      axios({
        method: 'get',
        url: 'http://18.209.180.210/api/ingredient/list',
      }).then((res) => {
        const serverResponse = res.data;
        dispatch(fetchIngredientSuccess(serverResponse));
      });
      break;
    default:
      // console.log('default');
      break;
  }
};
