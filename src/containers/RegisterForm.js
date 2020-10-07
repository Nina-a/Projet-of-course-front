import { connect } from 'react-redux';
import RegisterForm from '../components/RegisterForm';
import { checkAuth, registerSuccess, registerInputChange, registerError } from '../actions/user';


const mapState = (state) => ({
  email: state.user.email,
  name: state.user.name,
  pseudo: state.user.pseudo,
  password: state.user.password,
});

const mapDispatch = (dispatch) => ({
  changeField: (value, name) => {
    const object = {
      [name]: value,
    };
    dispatch(registerInputChange(object));
  },
  handleCheckAuth:() => {
    dispatch(checkAuth());
  },
  handlerRegisterSuccess: () => {
    dispatch(registerSuccess());
  },
  handlerRegisterError: () => {
    dispatch(registerError());
  },
});

export default connect(mapState, mapDispatch)(RegisterForm);
