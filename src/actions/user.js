export const REGISTER_INPUT_CHANGE = 'REGISTER_INPUT_CHANGE';
export const SUBMIT_REGISTER = 'SUBMIT_REGISTER';
export const REGISTER_SUCCESS = 'REGISTER_SUCCESS';
export const REGISTER_ERROR = 'REGISTER_ERROR';
export const SUBMIT_LOGOUT = 'SUBMIT_LOGOUT';
export const LOGOUT_SUCCESS = 'LOGOUT_SUCCESS';
export const LOGIN_INPUT_CHANGE = 'LOGIN_INPUT_CHANGE';
// export const CHECK_AUTH = 'CHECK_AUTH';

// =================== Action pour s'inscrire============================================
// Change les valeurs dans le state lors du remplissage des champs
export const registerInputChange = (payload) => ({
  type: REGISTER_INPUT_CHANGE,
  payload,
});

// Permet de faire la requete de soumission via le middleware
export const submitRegister = () => ({
  type: SUBMIT_REGISTER,
});

export const registerSuccess = (payload) => ({
  type: REGISTER_SUCCESS,
  payload,
});

export const registerError = () => ({
  type: REGISTER_ERROR,
});

// =================== Action pour se déconnecter ==========================================
export const SubmitLogout = () => ({
  type: SUBMIT_LOGOUT,
});

export const logoutSuccess = () => ({
  type: LOGOUT_SUCCESS,
});

// =================== Action pour se connecter =============================================
export const loginInputChange = (payload) => ({
  type: LOGIN_INPUT_CHANGE,
  payload,
});
/*
export const checkAuth = () => ({
  type: CHECK_AUTH,
});
*/
