import React from 'react';
import PropTypes from 'prop-types';
import './addingredient.css';

const AddIngredient = ({ 
  changeField,
  ingredient,
 }) => {

  const changeInput = (evt) => {
    changeField(evt.target.value, evt.target.name);
  };
  return (
    <div className="add_ingredients">
      <input
        type="text"
        className="form-control ingredients"
        id="ingredients"
        onChange={changeInput}
        name="title"
        value={ingredient}
        placeholder="ingredients"
      />

      <input
        type="text"
        className="form-control quantite"
        id="quantite"
        onChange={changeInput}
        name="quantité"
        value=""
        placeholder="quantité"
      />
      <input
        type="text"
        className="form-control"
        id="unite"
        onChange={changeInput}
        name="unite"
        value=""
        placeholder="unité"
      />
    </div>
  );
};

export default AddIngredient;
