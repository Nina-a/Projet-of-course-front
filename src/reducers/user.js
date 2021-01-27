import {
  REGISTER_INPUT_CHANGE,
  REGISTER_INPUT_SUBMIT,
  REGISTER_SUCCESS,
  REGISTER_ERROR,
  LOGIN_INPUT_CHANGE,
  LOGIN_INPUT_SUBMIT,
  LOGIN_SUCCESS,
} from '../actions/user';

const initialState = {
  loading: false,
  email: '',
  password: '',
  isLogged: false,
  pseudo: '',
  loggedMessage: 'Bienvenue',
  name: '',
  avatar: '',
  token: '',
};

const user = (state = initialState, action = {}) => {
  switch (action.type) {
    // =================== Action pour s'inscrire==========================================
    // L'action d'inscription s'est bien déroulée
    case REGISTER_SUCCESS:
      return {
        ...state,
        loading: false,
        isLogged: true,
        pseudo: state.pseudo,
        loggedMessage: `Bienvenue ${state.pseudo}`,
      };
    // L'action d'inscription n'a pas aboutie
    // TODO
    case REGISTER_ERROR:
      return {
        ...state,
        loading: false,
        isLogged: false,
        pseudo: '',
        loggedMessage: '',
      };
    // Soumission du formulaire d'inscription
    case REGISTER_INPUT_SUBMIT:
      return {
        ...state,
        loading: true,
      };
    // Changement des valeurs dans le formulaire d'inscription
    case REGISTER_INPUT_CHANGE:
      return {
        ...state,
        ...action.payload,
      };
      /* case CHECK_AUTH:
    {
      const userStorage = localStorage.getItem('user');
      if (userStorage && JSON.parse(userStorage)) {
        const userToken = JSON.parse(userStorage).token;
        if (userToken) {
          return {
            ...state,
            token: userToken,
            isLogged: true,
          };
        }
      }

      return {
        ...state,
      };
    }
    */
      /* case LOGIN_INPUT_LOGOUT:
    {
      localStorage.removeItem('user');
      window.location.assign('/');
      return {
        ...state,
        isLogged: false,
        pseudo: '',
        token: '',
        loggedMessage: '',
      };
    }
*/
      /* case LOGIN_SUCCESS:
      localStorage.setItem(
        'user',
        JSON.stringify({
          token: action.payload.token.token,
          isLogged: true,
          pseudo: action.payload.pseudo,
          loggedMessage: `Bienvenue ${action.payload.pseudo}`,
        }),
      );
      return {
        ...state,
        token: action.payload.token,
        loading: false,
        isLogged: true,
        pseudo: action.payload.pseudo,
        loggedMessage: `Bienvenue ${action.payload.pseudo}`,
      }; */

      /* case LOGIN_ERROR:
      return {
        ...state,
        loading: false,
        isLogged: false,
        pseudo: '',
        loggedMessage: '',
      }; */

      /* case LOGIN_INPUT_CHANGE:
      return {
        ...state,
        ...action.payload,
      };
      */
      /*
    case LOGIN_INPUT_SUBMIT:
      return {
        ...state,
        loading: true,
      };
      */

    default:
      return state;
  }
};

export default user;
