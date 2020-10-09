import React from 'react';
import PropTypes from 'prop-types';
import Field from './Field';
// import { useField } from './hooks';

import './style.scss';

const RecipeForm = ({
  title,
  subtitle,
  description,
  picture,
  servings,
  changeField,
  handleSubmit,
}) => {
  const handleSubmitInternal = (evt) => {
    evt.preventDefault();
    handleSubmit();
  };

  return (
    <div className="recipe-form">
      <form autoComplete="off" className="reciupe-form-element" onSubmit={handleSubmitInternal}>
        <Field
          title="titre de la recette"
          placeholder="titre"
          onChange={changeField}
          value={title}
        />
        <Field
          name="subtitle"
          type="text"
          placeholder="sous-titre"
          onChange={changeField}
          value={subtitle}
        />
        <Field
          name="description"
          type="text"
          placeholder="décrire les étapes ici"
          onChange={changeField}
          value={description}
        />
        <Field
          name="picture"
          type="file"
          placeholder="photo de la recette"
          onChange={changeField}
          value={picture}
        />
        <Field
          name="servings"
          type="number"
          placeholder="indiquer le nombre de personnes"
          onChange={changeField}
          value={servings}
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
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  picture: PropTypes.string.isRequired,
  servings: PropTypes.string.isRequired,
//  private: PropTypes.select.isRequired,
  changeField: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
//  handleLogout: PropTypes.func.isRequired,
//  RecipeMessage: PropTypes.string,
};

//RecipeForm.defaultProps = {
  //Private: true,
  //RecipeMessage: 'Sauvegardé',
//};

export default RecipeForm;
