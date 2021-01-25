import axios from 'axios';
import {
  FETCH_RECIPES, fetchRecipesSuccess, fetchRecipesError, ADD_RECIPE, addRecipeSuccess, addRecipeError,
} from '../actions/recipes';
import { FETCH_CATEGORIES, fetchCategoriesSuccess } from '../actions/categories';
import { FETCH_INGREDIENT, fetchIngredientSuccess } from '../actions/ingredients';
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
    case REGISTER_INPUT_SUBMIT:
      axios({
        method: 'post',
        url: 'http://of-course-back/public/users/new',
        data: {
          name: store.getState().user.name,
          email: store.getState().user.email,
          password: store.getState().user.password,
          pseudo: store.getState().user.pseudo,
          // avatar: store.getState().user.avatar,
          role: 'user',
        },
      })
        .then((res) => {
          const serverResponse = res.data;
          // console.log(serverResponse);
          dispatch(registerSuccess({
            ...serverResponse,
            pseudo: store.getState().user.pseudo,
          }));
          alert('Votre inscription est bien prise en compte /n Vous allez être redirigé vers la page de login');
          window.location.assign('/login');
        // Retour du serveur avec les infos du user
        })
        .catch((err) => {
          console.error(err);
          dispatch(registerError());
          // En cas d'user non trouvé dans la data, le serveur retourne une erreur
        });
      break;
    default:
      // console.log('default');
      break;
  }
};
