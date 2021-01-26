import axios from 'axios';

import {
  REGISTER_INPUT_SUBMIT,
  registerSuccess,
  registerError,
} from '../actions/user';

export default (store) => (next) => (action) => {
  next(action);
  const { dispatch } = store;
  switch (action.type) {
    // Action de s'enregister => pas besoin de reconnecter
    // Renvoie sur la page d'acceuil
    case REGISTER_INPUT_SUBMIT:
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
          dispatch(registerSuccess({
            ...serverResponse,
            token: serverResponse,
            pseudo: store.getState().user.pseudo,
          }));
          // TODO Faire un message qui préviens de la réussite de l'inscription 
          alert('Votre inscription est bien prise en compte Vous allez être redirigé vers la page d\'acceuil');
          window.location.assign('/');
        // Retour du serveur avec les infos du user
        })
        .catch((err) => {
          console.error(err);
          dispatch(registerError());
        });
      break;
    default:
      // console.log('default');
      break;
  }
};
