import {} from '../actions';
import { ADD_TO_PLANNING } from '../actions/recipes';

export const initialState = {
  // TODO !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
  planning: {
    1: {
      Entrée: ' ',
      Plat: ' ',
      Dessert: ' ',
    },
    2: {
      Entrée: ' ',
      Plat: ' ',
      Dessert: ' ',
    },
    3: {
      Entrée: ' ',
      Plat: ' ',
      Dessert: ' ',
    },
    4: {
      Entrée: ' ',
      Plat: ' ',
      Dessert: ' ',
    },
    5: {
      Entrée: ' ',
      Plat: ' ',
      Dessert: ' ',
    },
    6: {
      Entrée: ' ',
      Plat: ' ',
      Dessert: ' ',
    },
    7: {
      Entrée: ' ',
      Plat: ' ',
      Dessert: ' ',
    },
    8: {
      Entrée: ' ',
      Plat: ' ',
      Dessert: ' ',
    },
    9: {
      Entrée: ' ',
      Plat: ' ',
      Dessert: ' ',
    },
    10: {
      Entrée: ' ',
      Plat: ' ',
      Dessert: ' ',
    },
    11: {
      Entrée: ' ',
      Plat: ' ',
      Dessert: ' ',
    },
    12: {
      Entrée: ' ',
      Plat: ' ',
      Dessert: ' ',
    },
    13: {
      Entrée: ' ',
      Plat: ' ',
      Dessert: ' ',
    },
    14: {
      Entrée: ' ',
      Plat: ' ',
      Dessert: ' ',
    },
  },
};
const planningreducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case ADD_TO_PLANNING:
      // Données reçues par l'action
      state.planning[action.value][action.category] = action.title;

      return {
        ...state,
      };
    default:
      return state;
  }
};

export default planningreducer;
