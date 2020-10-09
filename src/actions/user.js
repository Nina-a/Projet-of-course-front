export const LOGIN_INPUT_CHANGE = 'LOGIN_INPUT_CHANGE';
export const LOGIN_INPUT_SUBMIT = 'LOGIN_INPUT_SUBMIT';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_ERROR = 'LOGIN_ERROR';
export const CHECK_AUTH = 'CHECK_AUTH';
export const LOGIN_INPUT_LOGOUT = 'LOGIN_INPUT_LOGOUT';
export const LOGOUT_SUCCESS = 'LOGOUT_SUCCESS';
export const LOGOUT_ERROR = 'LOGOUT_ERROR';
export const REGISTER_INPUT_SUBMIT = 'REGISTER_INPUT_SUBMIT';
export const REGISTER_SUCCESS = 'REGISTER_SUCCESS';
export const REGISTER_ERROR = 'REGISTER_ERROR';
export const REGISTER_INPUT_CHANGE = 'REGISTER_INPUT_CHANGE';

export const checkAuth = () => ({
  type: CHECK_AUTH,
});

export const loginSuccess = (payload) => ({
  type: LOGIN_SUCCESS,
  payload,
});

export const loginError = () => ({
  type: LOGIN_ERROR,
});

export const loginInputChange = (payload) => ({
  type: LOGIN_INPUT_CHANGE,
  payload,
});

export const loginInputSubmit = () => ({
  type: LOGIN_INPUT_SUBMIT,
});

export const loginInputLogout = () => ({
  type: LOGIN_INPUT_LOGOUT,
});

export const logoutSuccess = () => ({
  type: LOGOUT_SUCCESS,
});

export const logoutError = () => ({
  type: LOGOUT_ERROR,
});

// == Action nécessaires pour s'inscrire
export const registerInputChange = (payload) => ({
  type: REGISTER_INPUT_CHANGE,
  payload,
});

export const registerInputSubmit = () => ({
  type: REGISTER_INPUT_SUBMIT,
});

export const registerSuccess = () => ({
  type: REGISTER_SUCCESS,
});

export const registerError = () => ({
  type: REGISTER_ERROR,
});
