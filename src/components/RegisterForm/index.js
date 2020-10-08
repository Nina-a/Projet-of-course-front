import React from 'react';

// == Import
import './style.scss';
import { Container, Col, Row } from 'react-bootstrap';
import { FileInput } from 'react-md';

import Field from './Field';

const RegisterForm = ({
  email,
  password,
  changeField,
  pseudo,
  name,
  handleRegister,
  avatar,
  onChangeHandle,
}) => {
  const registerInputSubmit = (evt) => {
    evt.preventDefault();
    handleRegister();
  };
  /**
    if (loading) {
      return <div className="login-form">Connexion en cours</div>;
    }
  */
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
              <div clasName="file-inputs">
                <FileInput id="plop" />
              </div>

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

export default RegisterForm;
