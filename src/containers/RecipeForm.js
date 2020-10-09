import { connect } from 'react-redux';
import RecipeForm from '../components/RecipeForm';
import { addRecipe } from '../actions/recipes';

const mapState = (state) => ({
  title: state.user.title,
  subtitle: state.user.subtitle,
  description: state.user.description,
  picture: state.user.picture,
  serving: state.user.servings,
  private: state.user.private, // boolean
});

const mapDispatch = (dispatch) => ({
  sendForm: (payload) => {
    dispatch(addRecipe(payload));
  },
});

export default connect(mapState, mapDispatch)(RecipeForm);
