import {
  REGISTER_INPUT_CHANGE,
  SUBMIT_REGISTER,
  REGISTER_SUCCESS,
  REGISTER_ERROR,
  LOGOUT_SUCCESS,
  LOGIN_INPUT_CHANGE,
  SUBMIT_LOGIN,
  LOGIN_SUCCESS,
  RELOAD_USER,
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
    // Soumission du formulaire d'inscription
    case SUBMIT_REGISTER:
      return {
        ...state,
        loading: true,
      };
    // L'action d'inscription s'est bien déroulée
    case REGISTER_SUCCESS:
      localStorage.setItem(
        'user',
        JSON.stringify({
          token: action.token,
          isLogged: true,
          pseudo: state.pseudo,
          loggedMessage: `Bienvenue ${state.pseudo}`,
        }),
      );
      return {
        ...state,
        token: action.token,
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

    // Changement des valeurs dans le formulaire d'inscription
    case REGISTER_INPUT_CHANGE:
      return {
        ...state,
        ...action.payload,
      };
    // =================== Action pour se déconnecter==========================================
    case LOGOUT_SUCCESS:
    {
      localStorage.removeItem('user');
      return {
        ...state,
        email: '',
        name: '',
        isLogged: false,
        pseudo: '',
        token: '',
        loggedMessage: '',
        password: '',
        avatar: '',
      };
    }
    // =================== Action pour se connecter ==========================================
    // Changement des valeurs dans le formulaire d'inscription
    case LOGIN_INPUT_CHANGE:
      return {
        ...state,
        ...action.payload,
      };
    // Soumission du formulaire de connexion
    case SUBMIT_LOGIN:
      return {
        ...state,
        loading: true,
      };
    // L'action d'inscription s'est bien déroulée
    case LOGIN_SUCCESS:
      localStorage.setItem(
        'user',
        JSON.stringify({
          token: action.token,
          isLogged: true,
          pseudo: state.pseudo,
          loggedMessage: `Bienvenue ${state.pseudo}`,
        }),
      );
      return {
        ...state,
        token: action.token,
        loading: false,
        isLogged: true,
        pseudo: state.pseudo,
        loggedMessage: `Bienvenue ${state.pseudo}`,
      };
    // =================== Action pour ne pas perdre la connection apres un refresh ==========
    case RELOAD_USER:
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

    /* case LOGIN_ERROR:
      return {
        ...state,
        loading: false,
        isLogged: false,
        pseudo: '',
        loggedMessage: '',
      }; */

    default:
      return state;
  }
};

export default user;
