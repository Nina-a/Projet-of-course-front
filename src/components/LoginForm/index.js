import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Field from './Field';
// import { useField } from './hooks';

import './style.scss';
import { useState } from 'react';
import { useEffect } from 'react';

const LoginForm = ({
  email,
  password,
  changeField,
  handleLogin,
  handleLogout,
  loading,
}) => {
  // https://www.freecodecamp.org/news/how-to-persist-a-logged-in-user-in-react/
  const [user, setUser] = useState(false);

  useEffect(() => {
    const loggedInUser = localStorage.getItem('user');
    if (loggedInUser) {
      setUser(JSON.parse(loggedInUser));
    }
  }, []);

  const handleSubmit = (evt) => {
    evt.preventDefault();
    handleLogin();
  };

  if (loading) {
    return (
      <div className="login-form">
        Connexion en cours
      </div>
    );
  }

  return (
    <div className="login-form">
      {user && user.isLogged && (
        <div className="login-form-logged">
          <p className="login-form-message">
            {user.loggedMessage}
          </p>
          <button
            type="button"
            className="login-form-button"
            onClick={handleLogout}
          >
            Déconnexion
          </button>
        </div>
      )}
      {!user && (
        <form autoComplete="off" className="login-form-element" onSubmit={handleSubmit}>
          <Field
            name="email"
            placeholder="Adresse Email"
            onChange={changeField}
            value={email}
          />
          <Field
            name="password"
            type="password"
            placeholder="Mot de passe"
            onChange={changeField}
            value={password}
          />
          <button
            type="submit"
            className="login-form-button"
          >
            OK
          </button>
        </form>
      )}

      <Link to="/register">Si vous n'avez pas de compte, merci de vous inscrire ici</Link>
    </div>
  );
};

LoginForm.propTypes = {
  email: PropTypes.string.isRequired,
  password: PropTypes.string.isRequired,
  changeField: PropTypes.func.isRequired,
  handleLogin: PropTypes.func.isRequired,
  handleLogout: PropTypes.func.isRequired,
  isLogged: PropTypes.bool,
  loading: PropTypes.bool.isRequired,
  loggedMessage: PropTypes.string,
};

LoginForm.defaultProps = {
  isLogged: false,
  loggedMessage: 'Connecté',
};

export default LoginForm;
