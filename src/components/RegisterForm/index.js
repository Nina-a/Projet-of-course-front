import React from 'react';

// == Import
import './style.scss';
import { Container, Col, Row } from 'react-bootstrap';
import { FileInput } from 'react-md';
import PropTypes from 'prop-types';

import Field from './Field';
import { Redirect } from 'react-router';

const RegisterForm = ({
  email,
  password,
  changeField,
  pseudo,
  name,
  handleRegister,
  avatar,
  isLogged,
}) => {
  const registerInputSubmit = (evt) => {
    evt.preventDefault();
    handleRegister();
  };

  if (isLogged) {
    return <Redirect to="/" />;
  }

  return (
    <div className="register-form">
      <Container>
        <Row className="justify-content-md-center">
          <Col md={4}>
            <form
              autoComplete="off"
              className="login-form-element"
              onSubmit={registerInputSubmit}
            >
              <Field
                name="email"
                placeholder="Adresse Email"
                onChange={changeField}
                value={email}
              />
              <Field
                name="name"
                placeholder="Nom"
                onChange={changeField}
                value={name}
              />
              <Field
                name="pseudo"
                placeholder="Pseudo"
                onChange={changeField}
                value={pseudo}
              />
              <Field
                name="avatar"
                type="file"
                placeholder="Avatar"
                onChange={changeField}
                value={avatar}
              />
              <Field
                name="password"
                type="password"
                placeholder="Mot de passe"
                onChange={changeField}
                value={password}
              />

              <button type="submit" className="login-form-button">
                s'inscrire
              </button>
            </form>
          </Col>
        </Row>
      </Container>
    </div>
  );
};
// == Composant
Field.propTypes = {
  email: PropTypes.string.isRequired,
  password: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  pseudo: PropTypes.string.isRequired,
  handleRegister: PropTypes.func.isRequired,
  placeholder: PropTypes.string.isRequired,
};
export default RegisterForm;
