import { connect } from 'react-redux';
import NavBar from '../components/NavBar';

const mapStateToProps = (state) => {
  console.log(state);
  return {
    isLogged: state.user.isLogged,
  };
};
const mapDispatchToProps = null;

export default connect(mapStateToProps, mapDispatchToProps)(NavBar);
