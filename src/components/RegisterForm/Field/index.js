// == Import : npm
import React from 'react';
import PropTypes from 'prop-types';

// == Import : local
import './style.scss';
import { Form } from 'react-bootstrap';

// == Composant
const Field = ({
  value,
  type,
  name,
  placeholder,
  onChange,
}) => {
  const handleChange = (evt) => {
    onChange(evt.target.value, name);
  };
  const inputId = `field-${name}`;

  return (
    <Form.Group controlId={inputId}>
      <Form.Control type="text" value={value} placeholder={placeholder} onChange={handleChange} />
    </Form.Group>
  );
};
// == Composant
Field.propTypes = {
  value: PropTypes.string,
  type: PropTypes.string,
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
};

// Valeurs par défaut pour les props
Field.defaultProps = {
  value: '',
  type: 'text',
};

// == Export
export default Field;
