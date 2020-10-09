// == Import : npm
import React from 'react';
import PropTypes from 'prop-types';
import { FileInput } from 'react-md';

// == Import : local
import './style.scss';

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
    <div className={value.length > 0 ? 'field field--has-content' : 'field'}>

      {type === 'file' && <FileInput id="plop" />}
      {
        (type === 'text' || type === 'number' || type === 'password')
        && (
          <input
            // React - state
            value={value}
            onChange={handleChange}
            // infos de base
            id={inputId}
            type={type}
            className="field-input"
            placeholder={placeholder}
            name={name}
          />
        )
      }

      <label
        htmlFor={inputId}
        className="field-label"
      >
        {placeholder}
      </label>
    </div>
  );
};
// == Composant
Field.propTypes = {
  value: PropTypes.string,
  type: PropTypes.string,
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

// Valeurs par défaut pour les props
Field.defaultProps = {
  value: '',
  type: 'text',
};

// == Export
export default Field;
