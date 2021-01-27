import { REGISTER_SUCCESS } from '../actions/user';

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
    default:
      return state;
  }
};

export default app;
