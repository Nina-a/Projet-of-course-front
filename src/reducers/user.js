import {
  LOGIN_INPUT_CHANGE,
  LOGIN_INPUT_SUBMIT,
  LOGIN_SUCCESS,
  LOGIN_ERROR,
  LOGOUT_SUCCESS,
  REGISTER_INPUT_CHANGE,
  REGISTER_ERROR,
  REGISTER_SUCCESS,
  REGISTER_INPUT_SUBMIT,
  CHECK_AUTH,
} from '../actions/user';

const initialState = {
  loading: false,
  email: '',
  password: '',
  isLogged: false,
  pseudo: '',
  loggedMessage: 'Bienvenue intel',
  name: '',
  avatar: '',
  token: '',
};

const user = (state = initialState, action = {}) => {
  switch (action.type) {
    case CHECK_AUTH:
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

    case LOGOUT_SUCCESS:
      return {
        ...state,
        isLogged: false,
        pseudo: '',
        token: '',
        loggedMessage: '',
      };
    case LOGIN_SUCCESS:
      localStorage.setItem('user', JSON.stringify({
        token: action.payload.token.token,
        isLogged: true,
        pseudo: action.payload.pseudo,
        loggedMessage: `Bienvenue ${action.payload.pseudo}`,
      }));
      return {
        ...state,
        token: action.payload.token,
        loading: false,
        isLogged: true,
        pseudo: action.payload.pseudo,
        loggedMessage: `Bienvenue ${action.payload.pseudo}`,
      };
    case LOGIN_ERROR:
      return {
        ...state,
        loading: false,
        isLogged: false,
        pseudo: '',
        loggedMessage: '',
      };
    case LOGIN_INPUT_CHANGE:
      return {
        ...state,
        ...action.payload,
      };
    case LOGIN_INPUT_SUBMIT:
      return {
        ...state,
        loading: true,
      };
      // == Action pour s'inscrire
    case REGISTER_SUCCESS:
      return {
        ...state,
        loading: false,
        isLogged: true,
        pseudo: state.pseudo,
        loggedMessage: `Bienvenue ${state.pseudo}`,
      };
    case REGISTER_ERROR:
      return {
        ...state,
        loading: false,
        isLogged: false,
        pseudo: '',
        loggedMessage: '',
      };
    case REGISTER_INPUT_SUBMIT:
      return {
        ...state,
        loading: true,
      };
    case REGISTER_INPUT_CHANGE:
      return {
        ...state,
        ...action.payload,
      };
    default:
      return state;
  }
};

export default user;
