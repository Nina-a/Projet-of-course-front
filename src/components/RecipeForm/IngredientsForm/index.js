/* eslint-disable react/jsx-fragments */
import React, { useState } from 'react';
import PropTypes from 'prop-types';

const IngredientsForm = ({ ingredientsWithQuantie, setIngredientsWithQuantie, listIngredients }) => {
  console.log('test');

  const [currentIngredient, setCurrentIngredient] = useState({ id: null, quantity: '' });

  const addIngredient = () => {
    console.log('add ingredient');
    console.log(currentIngredient);
    setIngredientsWithQuantie([
      ...ingredientsWithQuantie,
      currentIngredient,
    ]);
  };

  const remove = (index) => {
    const otherList = [...ingredientsWithQuantie];
    otherList.splice(index, 1);
    setIngredientsWithQuantie(otherList);
  };

  return (
    <React.Fragment>
      <div className="field input-group">
        <ul>
          {ingredientsWithQuantie.map((ingredientWithQuantie, index) => (
            <li>
              <input type="hidden" name="quantity[]" value={ingredientWithQuantie.quantity} />
              <input type="hidden" name="ingredients[]" value={ingredientWithQuantie.id} />
              {ingredientWithQuantie.quantity} {ingredientWithQuantie.name}

              <button type="button" onClick={() => remove(index)}>Supprimer cet ingredient</button>
            </li>
          ))}

          <li>
            <div className="field input-group">
              <input type="number" name="quantity" value={currentIngredient.quantity} onChange={(evt) => setCurrentIngredient({ ...currentIngredient, quantity: evt.currentTarget.value })} />
              <select name="ingredient" className="custom-select" onChange={(evt) => setCurrentIngredient({ ...currentIngredient, id: evt.currentTarget.value, name: evt.currentTarget.options[evt.currentTarget.selectedIndex].dataset.name })}>
                {listIngredients.map((ingredient) => <option value={ingredient.id} data-name={ingredient.name} selected={currentIngredient.id === ingredient.id}>{ingredient.name} {ingredient.unit ? `(${ingredient.unit})` : ''}</option>)}
              </select>
            </div>
          </li>
        </ul>
      </div>
      <div className="field input-group">
        <button type="button" onClick={addIngredient}>Ajouter un ingrédient</button>
      </div>
    </React.Fragment>
  );
};

IngredientsForm.propTypes = {
  listIngredients: PropTypes.array.isRequired,
};

export default IngredientsForm;
