import { connect } from 'react-redux';
import App from '../components/App';
import { fetchRecipes } from '../actions/recipes';
import { reloadUser } from '../actions/user';

const mapState = (state) => ({
  redirectToHomepage: state.app.redirectToHomepage,
});

const mapDispatch = (dispatch) => ({
  fetchRecipes: () => {
    dispatch(fetchRecipes());
  },
  reloadUser: () => {
    dispatch(reloadUser());
  },
  /*
  checkAuth: () => {
    dispatch(checkAuth());
  },
  */
});

export default connect(mapState, mapDispatch)(App);
