import { connect } from 'react-redux';
import NavBar from '../components/NavBar';
import { SubmitLogout } from '../actions/user';

const mapStateToProps = (state) => {
  console.log(state);
  return {
    isLogged: state.user.isLogged,
  };
};
const mapDispatchToProps = (dispatch) => ({
  handleLogout: () => {
    dispatch(SubmitLogout());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(NavBar);
