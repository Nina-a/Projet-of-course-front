import {} from '../actions';
import { ADD_TO_PLANNING } from '../actions/recipes';

export const initialState = {
  // TODO !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
  planning: {
    1: {
      Entrée: { title: '' },
      Plat: { title: '' },
      Dessert: { title: '' },
    },
    2: {
      Entrée: { title: '' },
      Plat: { title: '' },
      Dessert: { title: '' },
    },
    3: {
      Entrée: { title: '' },
      Plat: { title: '' },
      Dessert: { title: '' },
    },
    4: {
      Entrée: { title: '' },
      Plat: { title: '' },
      Dessert: { title: '' },
    },
    5: {
      Entrée: { title: '' },
      Plat: { title: '' },
      Dessert: { title: '' },
    },
    6: {
      Entrée: { title: '' },
      Plat: { title: '' },
      Dessert: { title: '' },
    },
    7: {
      Entrée: { title: '' },
      Plat: { title: '' },
      Dessert: { title: '' },
    },
    8: {
      Entrée: { title: '' },
      Plat: { title: '' },
      Dessert: { title: '' },
    },
    9: {
      Entrée: { title: '' },
      Plat: { title: '' },
      Dessert: { title: '' },
    },
    10: {
      Entrée: { title: '' },
      Plat: { title: '' },
      Dessert: { title: '' },
    },
    11: {
      Entrée: { title: '' },
      Plat: { title: '' },
      Dessert: { title: '' },
    },
    12: {
      Entrée: { title: '' },
      Plat: { title: '' },
      Dessert: { title: '' },
    },
    13: {
      Entrée: { title: '' },
      Plat: { title: '' },
      Dessert: { title: '' },
    },
    14: {
      Entrée: { title: '' },
      Plat: { title: '' },
      Dessert: { title: '' },
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
