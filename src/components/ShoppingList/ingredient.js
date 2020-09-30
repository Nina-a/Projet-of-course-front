import React from 'react';
import PropTypes from 'prop-types';

const Ingredient = (props) => {
  const { ingredient, onTodoCheck } = props;
  console.log(props);
  console.log('ingredient', ingredient);
  return (
    <li className="ingredient">
      <input type="checkbox" />
      <span>qté </span>
      <span>unité </span>
      <span>ingrédient </span>
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
