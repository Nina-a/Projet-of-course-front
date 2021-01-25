/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';

import './style.scss';

const RegisterFrom = ({
  handleRegister,
  name,
  password,
  email,
  pseudo,
  avatar,
  onChange,
  changeField,
}) => {
  const handleRegisterSubmit = (evt) => {
    evt.preventDefault();
    handleRegister();
  };

  const changeInput = (evt) => {
    if (evt.target.name === 'avatar') {
      const reader = new FileReader();

      reader.addEventListener(
        'load', () => {
          // convert image file to base64 string
          changeField(reader.result, 'avatar');
        },
        false,
      );

      reader.readAsDataURL(evt.target.files[0]);
    }
    else {
      changeField(evt.target.value, evt.target.name);
    }
  };

  return (
    <div className="divFormLogin">
      <form onSubmit={handleRegisterSubmit}>
        <h1 className="registerForm-title">Formulaire d'inscription</h1>
        <div className="form-group">
          <input
            type="name"
            className="form-control"
            id="name"
            onChange={changeInput}
            name="name"
            value={name}
            placeholder="Nom"
          />
        </div>
        <div className="form-group">
          <input
            type="email"
            className="form-control"
            id="email"
            onChange={changeInput}
            name="email"
            placeholder="Email"
            value={email}
          />
        </div>
        <div className="form-group">
          <input
            type="password"
            className="form-control"
            id="password"
            placeholder="password"
            onChange={changeInput}
            name="password"
            value={password}
          />
        </div>
        <div className="form-group">
          <input
            type="text"
            className="form-control"
            id="pseudo"
            placeholder="pseudo"
            onChange={changeInput}
            name="pseudo"
            value={pseudo}
          />
        </div>
        <button type="submit" className="btn registerFormButton">Submit</button>
      </form>
    </div>
  );
};

export default RegisterFrom;
