import React from 'react';
import PropTypes from 'prop-types';
import Field from './Field';
// import { useField } from './hooks';

import './style.scss';

const RecipeForm = ({
  sendForm,
}) => {
  const handleSubmitInternal = (evt) => {
    evt.preventDefault();
    const formData = new FormData(evt.currentTarget);

    sendForm({
      title: formData.get('title'),
      subtitle: formData.get('subtitle'),
      category: formData.get('category'),
      ingredient: formData.get('ingredient'),
      description: formData.get('description'),
      serving: parseInt(formData.get('serving'), 10),
    });
  };

  return (
    <div className="recipe-form">
      <form autoComplete="off" className="recipe-form-element" onSubmit={handleSubmitInternal}>
        <Field
          name="title"
          title="titre de la recette"
          placeholder="titre"
        />
        <Field
          name="subtitle"
          type="text"
          placeholder="sous-titre"
        />
        <div className="field input-group">
          <select name="category" className="custom-select">
            <option value="starter">Entrée</option>
            <option value="dish">Plat</option>
            <option value="dessert">Dessert</option>
          </select>
        </div>
        <Field
          name="ingredient"
          type="text"
          placeholder="ingrédient"
        />
        <div className="field input-group">
          <textarea className="form-control" rows="6" name="description" placeholder="écrire les étapes ici" />
        </div>
        <Field
          name="picture"
          type="file"
          placeholder="photo de la recette"
        />
        <Field
          name="serving"
          type="number"
          placeholder="indiquer le nombre de personnes"
        />

        {
          /**
          <Field
          name="private"
          type="select"
          onChange={changeField}
          value={private}
        />
         */
        }
        <button
          type="submit"
          className="recipe-form-button"
        >
          Sauvegarder la recette
        </button>
      </form>
    </div>
  );
};

RecipeForm.propTypes = {
  sendForm: PropTypes.func.isRequired,
};

export default RecipeForm;
