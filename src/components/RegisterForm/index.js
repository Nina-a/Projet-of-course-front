import React from 'react';

// == Import
import './style.scss';
import Field from './Field';

const RegisterForm = () => (
  <div className="register-form">
    <fieldset>
      <legend>Inscription</legend>

      <Field
        name="email"
        placeholder="Adresse Email"
      />
      <Field
        name="pseudo"
        placeholder="pseudo"
      />
      <Field
        name="password"
        type="password"
        placeholder="Mot de passe"
      />
      <button
        type="submit"
        className="login-form-button"
      >
        OK
      </button>
    </fieldset>
  </div>
);

export default RegisterForm;
