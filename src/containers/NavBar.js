import { connect } from 'react-redux';
import NavBar from '../components/NavBar';
import { SubmitLogout } from '../actions/user';

const mapStateToProps = (state) => ({
  isLogged: state.user.isLogged,
  redirectToHomepage: state.app.redirectToHomepage,
});

const mapDispatchToProps = (dispatch) => ({
  handleLogout: () => {
    dispatch(SubmitLogout());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(NavBar);
