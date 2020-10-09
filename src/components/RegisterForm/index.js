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
      console.log('value', evt.target.files[0].name);
      console.log('value_2', evt.target.value);

      const reader = new FileReader();

      reader.addEventListener(
        'load', function (evt) {
          // convert image file to base64 string
          changeField(reader.result, evt.target.name);
        },
        false,
      );

      reader.readAsDataURL(evt.target.files[0]);
    }
    else changeField(evt.target.value, evt.target.name);
  };
  return (
    <form onSubmit={handleRegisterSubmit}>
      <div className="form-group">
        <input
          type="name"
          className="form-control"
          id="name"
          onChange={changeInput}
          name="name"
          value={name}
        />
      </div>
      <div className="form-group">
        <input
          type="email"
          className="form-control"
          id="email"
          onChange={changeInput}
          name="email"
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
      <div className="form-group">
        <input
          type="file"
          className="form-control"
          id="password"
          placeholder="avatar"
          onChange={changeInput}
          name="avatar"
        />
      </div>
      <button type="submit" className="btn btn-primary">
        Submit
      </button>
    </form>
  );
};

export default RegisterFrom;
