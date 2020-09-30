// == Import npm
import React from 'react';
import PropTypes from 'prop-types';

// == Import
import './style.scss';

// == Composant
const Recipes = ({ list }) => {
  console.log('list', list);
  return (
    <div className="recipes">
      <h1> Recipes </h1>
      {
      list.map((recipeDetail) => (
        <div className="card">
          <img className="card-image" alt="illustration" src={recipeDetail.image} />
          <div className="card-infos">
            <button className="add planning" type="button">+</button>
            <button className="add favorite" type="button">&#9825;</button>
            <h3 className="card-title">{recipeDetail.title}</h3>
            <a className="active">Lien vers la recette</a>
          </div>
        </div>
      ))
      };
    </div>
  );
};

// == PropTypes
Recipes.propTypes = {
  list: PropTypes.arrayOf({
    title: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
  }).isRequired,
};
// == Export
export default Recipes;
