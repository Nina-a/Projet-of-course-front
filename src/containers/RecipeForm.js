import { connect } from 'react-redux';
import RecipeForm from '../components/RecipeForm';
import { addRecipe, updateRecipe } from '../actions/recipes';

const mapState = (state) => ({
  title: state.user.title,
  subtitle: state.user.subtitle,
  description: state.user.description,
  picture: state.user.picture,
  serving: state.user.servings,
  private: state.user.private, // boolean 
});

const mapDispatch = (dispatch) => ({
  changeField: (title, subtitle, description, picture, serving, value) => {
    const object = {
      [title]: value,
      [subtitle]: value,
      [description]: value,
      [picture]: value,
      [serving]: value,
    };
    dispatch(addRecipe(object));
  },

});

export default recipe(mapState, mapDispatch)(RecipeForm);
