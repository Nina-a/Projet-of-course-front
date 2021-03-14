import React from 'react';
import PropTypes from 'prop-types';
import './style.css';

const RecipeForm = ({
  title,
  handleRecipe,
  changeField,
}) => {
  const handleRecipeSubmit = (evt) => {
    evt.preventDefault();
    handleRecipe();
  };

  const changeInput = (evt) => {
    changeField(evt.target.value, evt.target.name);
  };

  return (
    <div className="main-recipeForm">
      <form className="recipeForm" onSubmit={handleRecipeSubmit}>
        <h1 className="main-recipeForm-title">Ajout d'une recette</h1>
        <div className="form-group">
          <input
            type="text"
            className="form-control"
            id="title"
            onChange={changeInput}
            name="title"
            value={title}
            placeholder="Nom de la recette"
          />
        </div>
      </form>
    </div>
  );
};

RecipeForm.propTypes = {
  title: PropTypes.string.isRequired,
  handleRecipe: PropTypes.func.isRequired,
  changeField: PropTypes.func.isRequired,
};

export default RecipeForm;
