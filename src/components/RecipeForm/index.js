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

        <select className="btn btn-info" >
          <option value="0">Choississez la catégorie</option>
          <option value="1">Entrée</option>
          <option value="2">Plat</option>
          <option value="3">Déssert</option>
        </select>

        <input
            type="text"
            className="form-control"
            id="ingredients"
            onChange={changeInput}
            name="title"
            value=""
            placeholder="ingredients"
          />
        <button type="submit" className="btn ">Ajouter</button>
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
