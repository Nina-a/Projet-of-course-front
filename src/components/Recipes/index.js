// == Import npm
import React from 'react';
import PropTypes from 'prop-types';

// == Import
import './style.scss';

// == Composant
const Recipes = ({list}) => (
  <div className="Recipes">
    <h1> Recipes </h1>
    {list.map((recipeDetail) => (
      <div className="card">        <img className="card-image" alt="illustration" src={recipeDetail.image} />
        <div className="card-infos">
          <h3 className="card-title">{recipeDetail.title}</h3>
          <a className="active">Lien vers la recette</a>
        </div>
      </div>
    ))};
  </div>
);

// == PropTypes
Recipes.PropTypes = {
  title: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
};
// == Export
export default Recipes;
