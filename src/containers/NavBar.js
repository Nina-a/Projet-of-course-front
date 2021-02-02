import { connect } from 'react-redux';
import NavBar from '../components/NavBar';
import { submitLogout } from '../actions/user';
import { redirectToHomePageDone } from '../actions/app';

const mapStateToProps = (state) => ({
  isLogged: state.user.isLogged,
  redirectToHomepage: state.app.redirectToHomepage,
});

const mapDispatchToProps = (dispatch) => ({
  handleLogout: () => {
    dispatch(submitLogout());
  },
  redirectToHomePageDone: () => {
    dispatch(redirectToHomePageDone());
  },

});

export default connect(mapStateToProps, mapDispatchToProps)(NavBar);
