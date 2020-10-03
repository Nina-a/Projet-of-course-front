// == Import npm
import React from 'react';
import PropTypes from 'prop-types';

// == Import
import './recipe.scss';

// == Composant
const CardRecipe = ({ recipe }) => {
  console.log(recipe);
  return (
    recipe.map((recipeDetail) => (
      <div className="card-wrapper card-action">
        <div id="card-1" className="card card-rotating text-center">
          <div className="face front">
            <div className="card-up">
              <img
                className="card-img-top"
                src={recipeDetail.picture}
                alt="with a of clouds."
              />
            </div>
            <div className="card-body">
              <h3 className="font-weight-bold mb-3 pb-1">{recipeDetail.title}</h3>
            </div>
          </div>

          <div className="face back">
            <div className="card-body">
              <a className="rotate-btn" data-card="card-1">
                <i className="fas fa-undo" />
                Plus de détails ici
              </a>
            </div>
          </div>
        </div>
      </div>
    ))
  );
};

CardRecipe.propTypes = {
  recipe: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      picture: PropTypes.string.isRequired,
    }).isRequired,
  ),
};
// == Export
export default CardRecipe;
