import axios from 'axios';
import {
  FETCH_INGREDIENTS,
  fetchIngredientsSuccess,
  fetchIngredientsError
} from '../actions/recipeForm';

export default (store) => (next) => (action) => {
  next(action);
  const { dispatch } = store;
  switch (action.type){
    case FETCH_INGREDIENTS:
      axios({
        method: 'get',
        url: 'http://of-course-back/public/ingredients'
      })
      .then((res) => {
        const { data } = res;
        console.log(data);
        dispatch(fetchIngredientsSuccess(data));
      })
      .catch(() =>{
      // Affiche une erreur si la requète n'a pas fonctionné)
      dispatch(fetchIngredientsError());
      });
      break;

    default:
      break;
    } 
  

}
