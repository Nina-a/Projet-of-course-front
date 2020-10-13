import { connect } from 'react-redux';
import RecipeForm from '../components/RecipeForm';
import { addRecipe } from '../actions/recipes';

const mapState = (state) => ({
  title: state.user.title,
  subtitle: state.user.subtitle,
  category: state.user.category,
  description: state.user.description,
  picture: state.user.picture,
  serving: state.user.servings,
  private: state.user.private, // boolean
  isLogged: state.user.isLogged,
});

const mapDispatch = (dispatch) => ({
  sendForm: (payload) => {
    dispatch(addRecipe(payload));
  },
});

export default connect(mapState, mapDispatch)(RecipeForm);
