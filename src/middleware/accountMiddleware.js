import axios from 'axios';

import {
  SUBMIT_REGISTER,
  registerSuccess,
  registerError,
  SUBMIT_LOGOUT,
} from '../actions/user';

export default (store) => (next) => (action) => {
  next(action);
  const { dispatch } = store;
  switch (action.type) {
    // Action de s'enregister => pas besoin de se connecter
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
          dispatch(
            registerSuccess({
              ...serverResponse,
              token: serverResponse,
              pseudo: store.getState().user.pseudo,
            }),
          );
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

    // Action de se déconnecter
    case SUBMIT_LOGOUT:
      axios.get(
        axios({
          method: 'get',
          url: 'http://of-course-back/public/users/logout',
        }),
        {
          headers: {
            Authorization: `Bearer ${JSON.parse(localStorage.getItem('user')).token}`,
          },
        },
      )
        .then((res) => {
          const { data } = res;
          console.log('deco réussie');
          dispatch(logoutSuccess());
        })
        .catch((err) => {
          debugger;
          // console.error(err);
          dispatch(logoutSuccess());
        });
      window.location.assign('/');
      break;
    default:
      // console.log('default');
      break;
  }
};
