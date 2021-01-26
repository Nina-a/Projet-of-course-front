import { connect } from 'react-redux';
import RegisterForm from '../components/RegisterForm';
import {
  checkAuth,
  registerSuccess,
  registerInputChange,
  registerError,
  registerInputSubmit,
} from '../actions/user';

const mapState = (state) => ({
  email: state.user.email,
  name: state.user.name,
  pseudo: state.user.pseudo,
  password: state.user.password,
  avatar: state.user.avatar,
});

const mapDispatch = (dispatch) => ({
  // met les champs dans le state
  changeField: (value, name) => {
    const object = {
      [name]: value,
    };
    dispatch(registerInputChange(object));
  },
  handleCheckAuth: () => {
    dispatch(checkAuth());
  },
  handlerRegisterSuccess: () => {
    dispatch(registerSuccess());
  },
  handlerRegisterError: () => {
    dispatch(registerError());
  },
  handleRegister: (payload) => {
    dispatch(registerInputSubmit(payload));
  },
});

export default connect(mapState, mapDispatch)(RegisterForm);
