import React from 'react';

// == Import
import './style.scss';
import { Container, Col, Row, Button } from 'react-bootstrap';
import Field from './Field';

const RegisterForm = ({
  email,
  password,
  changeField,
  handleLogin,
  handleLogout,
  isLogged,
  loading,
  loggedMessage,
  pseudo,
  name,
}) => {
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
    <div className="register-form">
      <Container>
        <Row className="justify-content-md-center">
          <Col md={4}>
            <fieldset>
              <legend>Formulaire d'inscription</legend>

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
                placeholder="pseudo"
                onChange={changeField}
                value={pseudo}
              />
              <Field
                name="password"
                type="password"
                placeholder="Mot de passe"
                onChange={changeField}
                value={password}
              />
              <Field
                name="confirm-password"
                type="password"
                placeholder="Confirmer le mot de passe"
                onChange={changeField}
                value={password}
              />
              <Button type="submit" value="Envoyer">S'inscrire</Button>
            </fieldset>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default RegisterForm;
