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

    debugger;
    sendForm({
      title: formData.get('title'),
      subtitle: formData.get('subtitle'),
      description: formData.get('description'),
      servings: formData.get('servings'),
    });
  };

  return (
    <div className="recipe-form">
      <form autoComplete="off" className="reciupe-form-element" onSubmit={handleSubmitInternal}>
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
        <Field
          name="description"
          type="text"
          placeholder="décrire les étapes ici"
        />
        <Field
          name="picture"
          type="file"
          placeholder="photo de la recette"
        />
        <Field
          name="servings"
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
