import { connect } from 'react-redux';
import App from '../components/App';
import { fetchRecipes } from '../actions/recipes';
import { checkAuth } from '../actions/user';

const mapState = (state) => ({
  redirectToHomepage: state.app.redirectToHomepage,
});

const mapDispatch = (dispatch) => ({
  fetchRecipes: () => {
    console.log('ici je recupere mes données');
    dispatch(fetchRecipes());
  },
  /*
  checkAuth: () => {
    dispatch(checkAuth());
  },
  */
});

export default connect(mapState, mapDispatch)(App);
