import axios from 'axios';

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
    /* case CHECK_AUTH:
      axios({
        method: 'post',
        url: 'http://of-course-back/public/recipes', // url à modifier (en cours côté back)
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
*/
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
          dispatch(
            loginSuccess({
              token: serverResponse,
              pseudo: store.getState().user.name,
            })
          );
          window.location.assign('/');
          // Retour du serveur avec les infos du user
        })
        .catch((err) => {
          console.error(err);
          dispatch(loginError());
          // En cas d'user non trouvé dans la data, le serveur retourne une erreur
        });
      break;

    /* case LOGIN_INPUT_LOGOUT:
      axios.get(
        axios({
          method: 'get',
          url: 'http://18.209.180.210/logout',
        }),
        {
          headers: {
            Authorization: `Bearer ${JSON.parse(localStorage.getItem('user')).token}`,
          },
        },
      )
        .then((res) => {
          debugger;
          const { data } = res;
          console.log(data);
          dispatch(logoutSuccess());
        })
        .catch((err) => {
          debugger;
          // console.error(err);
          dispatch(logoutSuccess());
        });
      window.location.assign('/');
      break;
*/
    // Pour s'enregistrer
    case REGISTER_INPUT_SUBMIT:
      {
        const { user } = store.getState();
        axios({
          method: 'post',
          url: 'http://of-course-back/public/users/new',
          // url: 'http://localhost:3000/users/new',
          data: {
            name: user.name,
            email: user.email,
            password: user.password,
            pseudo: user.pseudo,
            // avatar: user.avatar,
            role: 'user',
          },
        })
          .then((res) => {
            const serverResponse = res.data;
            // console.log(serverResponse);
            dispatch(
              registerSuccess({
                ...serverResponse,
                pseudo: store.getState().user.pseudo,
              })
            );
            window.location.assign('/login');
            // Retour du serveur avec les infos du user
          })
          .catch((err) => {
            dispatch(registerError());
            // En cas d'user non trouvé dans la data, le serveur retourne une erreur
          });
      }
      break;

    default:
      // console.log('default');
      break;
  }
};
