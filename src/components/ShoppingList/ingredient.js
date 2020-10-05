import React from 'react';
import PropTypes from 'prop-types';

const Ingredient = (props) => {
  const { ingredient, onTodoCheck } = props;
  console.log(props);
  console.log('ingredient', ingredient);
  return (
    <li>
      <div class="form-check"> 
        <label class="form-check-label"> 
        <input class="checkbox" type="checkbox" /> 
        For what reason would it be advisable. 
        <i class="input-helper"></i>
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
