import axios from 'axios';
import { FETCH_RECIPES, fetchRecipesSuccess, fetchRecipesError, ADD_RECIPE} from '../actions/recipes';
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
  addRecipeError,

} from '../actions/user';

export default (store) => (next) => (action) => {
  next(action);
  const { dispatch } = store;
  switch (action.type) {
    case FETCH_RECIPES:
      // Je lance la requête axios
      axios({
        method: 'get',
        url: 'http://18.209.180.210/api/recipe/list',
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

    case CHECK_AUTH:
      axios({
        method: 'post',
        url: 'http://18.209.180.210/api/recipe/list', // url à modifier (en cours côté back)
        // requête envoyée pour l'authentification de l'user
      })
        .then((res) => {
          const { data } = res;
          // Si l'user est connecté
          if (data.logged) {
            dispatch(loginSuccess(data));
          }
        })
        // Si au contraire, il n'a pas été reconnu
        .catch((err) => {
          // console.error(err);
        });
      break;

    case LOGIN_INPUT_SUBMIT:
      axios({
        method: 'post',
        url: 'http://18.209.180.210/api/login_check',
        data: {
          username: store.getState().user.email,
          password: store.getState().user.password,
        },
      })
        .then((res) => {
          const serverResponse = res.data;
          // console.log(serverResponse);
          dispatch(loginSuccess({
            token: serverResponse,
            pseudo: store.getState().user.email,
          }));
          // Retour du serveur avec les infos du user
        })
        .catch((err) => {
          console.error(err);
          dispatch(loginError());
          // En cas d'user non trouvé dans la data, le serveur retourne une erreur
        });
      break;

    case LOGIN_INPUT_LOGOUT:
      axios.get(
        'http://18.209.180.210/logout',
        {
          headers: {
            Authorization: `Bearer ${JSON.parse(localStorage.getItem('user')).token}`,
          },
        },
      )
        .then((res) => {
          const { data } = res;
          //console.log (data);
          dispatch(logoutSuccess());
        })
        .catch((err) => {
          // console.error(err);
          dispatch(logoutError());
        });
      break;

    case REGISTER_INPUT_SUBMIT:
      axios({
        method: 'post',
        url: 'http://18.209.180.210/api/user/new',
        data: {
          name: store.getState().user.name,
          email: store.getState().user.email,
          password: store.getState().user.password,
          pseudo: store.getState().user.pseudo,
          avatar: store.getState().user.avatar,
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
          // Retour du serveur avec les infos du user
        })
        .catch((err) => {
          console.error(err);
          dispatch(registerError());
          // En cas d'user non trouvé dans la data, le serveur retourne une erreur
        });
      break;

    case ADD_RECIPE:
      // https://flaviocopes.com/axios-send-authorization-header/
      axios.post(
        'http://18.209.180.210/api/add/recipe',
        {
          ...action.payload,
          private: false,
          user: 25,
        },
        {
          headers: {
            Authorization: `Bearer ${JSON.parse(localStorage.getItem('user')).token}`,
          },
        },
      )
        .then((res) => {
        //  const serverResponse = res.data;
          // console.log(serverResponse);
          // dispatch(addRecipeSuccess(serverResponse));
          // Retour du serveur avec les infos de la recette
        })
        .catch((err) => {
          console.error(err);
          dispatch(addRecipeError());
          // En cas d'échec de la sauvegarde dans la data, le serveur retourne une erreur
        });
      break;
    default:
      //console.log('default');
      break;
  }
};
