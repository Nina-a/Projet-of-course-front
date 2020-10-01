import { connect } from 'react-redux';
import App from '../components/App';
import { fetchRecipes, addRecipes } from '../actions/recipes';

const mapState = null;

const mapDispatch = (dispatch) => ({
  fetchRecipes: () => {
    console.log('ici je recupere mes données');
    dispatch(fetchRecipes());
  },
  addRecipes: () => {
    console.log('plop');
    dispatch(addRecipes());
  },
});

export default connect(mapState, mapDispatch)(App);
