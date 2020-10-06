import React from 'react';
import PropTypes from 'prop-types';

const Ingredient = (props) => {
  const { ingredient, onTodoCheck } = props;
  console.log(props);
  console.log('ingredient', ingredient);
  return (
    <li>
      <div className="form-check">
        <label className="form-check-label">
          <input className="checkbox" type="checkbox" />
          For what reason would it be advisable.
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
      unity: PropTypes.string.isRequired,
    }),
  ).isRequired,
  onTodoCheck: PropTypes.func.isRequired,
};
export default Ingredient;
