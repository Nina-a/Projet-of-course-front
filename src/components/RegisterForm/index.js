import React from 'react';

// == Import
import './style.scss';
import { Container, Col, Row, Button } from 'react-bootstrap';
import Field from './Field';

const RegisterForm = ({changeField}) => {
  console.log('test');

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
              />
              <Field
                name="name"
                placeholder="Nom"
                onChange={changeField}
              />
              <Field
                name="pseudo"
                placeholder="pseudo"
                onChange={changeField}
              />
              <Field
                name="password"
                type="password"
                placeholder="Mot de passe"
                onChange={changeField}
              />
              <Field
                name="confirm-password"
                type="password"
                placeholder="Confirmer le mot de passe"
                onChange={changeField}
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
