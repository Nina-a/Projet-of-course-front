import { connect } from 'react-redux';
import RecipeForm from '../components/RecipeForm';
import { fetchIngredients} from '../actions/recipeForm';

const mapState = (state) => ({

});

const mapDispatch = (dispatch) => ({
  fetchIngredients: () => {
    dispatch(fetchIngredients());
  },
});

export default connect(mapState, mapDispatch)(RecipeForm);
