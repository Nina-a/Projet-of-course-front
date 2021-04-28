import { connect } from 'react-redux';
import RecipeForm from '../components/RecipeForm';
// import { addRecipe } from '../actions/recipes';

const mapState = (state) => ({
  //listCategories: state.categories,
  //listQuantity: state.quantity,
  //listIngredients: state.ingredients,
});

const mapDispatch = (dispatch) => ({
  sendForm: (payload) => {
    dispatch(addRecipe(payload));
  },
});

export default connect(mapState, mapDispatch)(RecipeForm);
