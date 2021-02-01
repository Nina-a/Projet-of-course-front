import { REGISTER_SUCCESS, LOGOUT_SUCCESS, LOGIN_SUCCESS } from '../actions/user';
import { REDIRECT_TO_HOME_PAGE_DONE } from '../actions/app';

const initialState = {
  redirectToHomepage: false,
};

const app = (state = initialState, action = {}) => {
  switch (action.type) {
    case REGISTER_SUCCESS:
      return {
        ...state,
        redirectToHomepage: true,
      };
    case LOGOUT_SUCCESS:
      return {
        ...state,
        redirectToHomepage: true,
      };
    case REDIRECT_TO_HOME_PAGE_DONE:
      return {
        ...state,
        redirectToHomepage: false,
      };
    case LOGIN_SUCCESS: {
      return {
        ...state,
        redirectToHomepage: true,
      };
    }
    default:
      return state;
  }
};

export default app;
