import React from 'react';
import PropTypes from 'prop-types';

const Ingredient = (ingredientData) => {
  const { ingredient } = ingredientData;
  console.log(ingredientData);
  console.log('ingredient', ingredient);
  return (
    <li>
      <div className="form-check">
        <label className="form-check-label">
          <input className="checkbox" type="checkbox" />
          { ingredientData.quantity ? `${ingredientData.quantity} ${ingredientData.unit}` : '' } { ingredientData.name }
          <i className="input-helper" />
        </label>
      </div>
    </li>
  );
};
Ingredient.propTypes = {
  ingredientData: PropTypes.shape(
    PropTypes.shape({
      ingredient: PropTypes.string.isRequired,
      quantity: PropTypes.number.isRequired,
      unit: PropTypes.string.isRequired,
    }),
  ).isRequired,
};
export default Ingredient;
