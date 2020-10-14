import { FETCH_QUANTITY_SUCCESS } from '../actions/quantity';

const initialState = [];

const quantity = (state = initialState, action = {}) => {
  switch (action.type) {
    case FETCH_QUANTITY_SUCCESS:
      return action.payload;
    default:
      return state;
  }
};

export default quantity;
