import axios from 'axios';

import {
  SUBMIT_REGISTER,
  registerSuccess,
  registerError,
  SUBMIT_LOGOUT,
  logoutSuccess,
} from '../actions/user';

export default (store) => (next) => (action) => {
  next(action);
  const { dispatch } = store;
  switch (action.type) {
    // =================== Action pour s'inscrire============================================
    // Renvoie sur la page d'acceuil
    case SUBMIT_REGISTER:
      axios({
        method: 'post',
        url: 'http://of-course-back/public/users/new',
        data: {
          name: store.getState().user.name,
          email: store.getState().user.email,
          password: store.getState().user.password,
          pseudo: store.getState().user.pseudo,
          role: 'user',
        },
      })
        .then((res) => {
          const serverResponse = res.data;
          dispatch(registerSuccess(serverResponse.token));
          // TODO Faire un message qui préviens de la réussite de l'inscription
          alert(
            "Votre inscription est bien prise en compte Vous allez être redirigé vers la page d'acceuil",
          );
        })
        .catch((err) => {
          console.error(err);
          dispatch(registerError());
        });
      break;

    // =================== Action pour se déconnecter============================================
    case SUBMIT_LOGOUT:
      axios({
        method: 'POST',
        url: 'http://of-course-back/public/users/logout',
        headers: {
          Authorization: `Bearer ${
            JSON.parse(localStorage.getItem('user')).token
          }`,
        },
      })
        .then((_) => {
          // history.push('/');
          dispatch(logoutSuccess());
        })
        .catch((err) => {
          // console.error(err);
          dispatch(logoutError());
        });

      break;
    default:
      // console.log('default');
      break;
  }
};
