import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
// import { useField } from './hooks';

import './style.scss';

const LoginForm = ({
  email,
  password,
  changeField,
  handleLogin,
  handleLogout,
  loading,
  isLogged,
}) => {
  const handleSubmit = (evt) => {
    evt.preventDefault();
    handleLogin();
  };

  const handleLogoutForm = (evt) => {
    evt.preventDefault();
    handleLogout();
  };

  const changeInput = (evt) => {
    changeField(evt.target.value, evt.target.name);
  };

  if (loading) {
    return (
      <div className="login-form">
        <h1 className="loadingConnexion-title">Connexion en cours</h1>
      </div>
    );
  }

  return (
    <div className="login-form">
      <h1 className="login-title">Formulaire de connexion</h1>
      {isLogged && (
        <div className="login-form-logged">

          <button
            type="button"
            className="login-form-button"
            onClick={handleLogoutForm}
          >
            Déconnexion
          </button>
        </div>
      )}
      {!isLogged && (
        <form autoComplete="off" className="login-form-element" onSubmit={handleSubmit}>
          <div className="form-group">
            <input
              type="email"
              className="form-control"
              id="email"
              onChange={changeInput}
              name="email"
              value={email}
              placeholder="Email"
            />
          </div>
          <div className="form-group">
            <input
              type="password"
              className="form-control"
              id="password"
              onChange={changeInput}
              name="password"
              value={password}
              placeholder="Mot de passe"
            />
          </div>
          <button
            type="submit"
            className="login-form-button"
          >
            OK
          </button>
          <Link className="registerLink" to="/register">Si vous n'avez pas de compte, merci de vous inscrire ici</Link>

        </form>
      )}
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
