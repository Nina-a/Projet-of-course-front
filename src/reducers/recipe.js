// import {
//   ADD_RECIPE,
//   UPDATE_RECIPE,
// } from '../actions/recipes';

// export const initialState = {
//   listTitle: [],
//   listDescription: [],
//   listPicture: [],
//   listSubstitle: [],
//   listIngredient: [],
//   listPeople: [],
//   error: null,
//   private: true,
// };

// const reducerrecipe = (state = initialState, action = {}) => {
//   switch (action.type) {
//     case ADD_RECIPE: {
//       const addrecipe = action.payload;

//       return {
//         ...state,
//         list: [...action.payload],
//         listTitle: [...listTitle],
//         listDescription: [...listDescription],
//         listPicture: [...listPicture],
//         listSubstitle: [...listSubstitle],
//         listIngredient: [...listIngredient],
//         listPeople: [...listPeople],
//         error: null,
//         private: true,
//       };
//     }
//     default:
//       return state;
//   }
// };

// export default reducerrecipe;
