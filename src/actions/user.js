export const REGISTER_INPUT_CHANGE = 'REGISTER_INPUT_CHANGE';
export const REGISTER_INPUT_SUBMIT = 'REGISTER_INPUT_SUBMIT';
export const REGISTER_SUCCESS = 'REGISTER_SUCCESS';
export const REGISTER_ERROR = 'REGISTER_ERROR';
// export const CHECK_AUTH = 'CHECK_AUTH';

// =================== Action pour s'inscrire==========================================
// Change les valeurs dans le state lors du remplissage des champs
export const registerInputChange = (payload) => ({
  type: REGISTER_INPUT_CHANGE,
  payload,
});

// Permet de faire la requete de soumission via le middleware
export const registerInputSubmit = () => ({
  type: REGISTER_INPUT_SUBMIT,
});

export const registerSuccess = (payload) => ({
  type: REGISTER_SUCCESS,
  payload,
});

export const registerError = () => ({
  type: REGISTER_ERROR,
});

/*
export const checkAuth = () => ({
  type: CHECK_AUTH,
});
*/
