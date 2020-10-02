// == Import npm
import React from 'react';

// == Import
import './recipe.scss';

// == Composant
const CardRecipe = ({ recipe }) => (
  // console.log('list', recipe)
  {
  recipe.map((recipeDetail) => (
    <div className="card-wrapper card-action">
      <div id="card-1" className="card card-rotating text-center">

        <div className="face front">
          <div className="card-up">
            <img className="card-img-top" src={recipeDetail.picture} alt="with a of clouds." />
          </div>
          <div className="card-body">
            <p className="font-weight-bold text-uppercase pink-text mb-3">Photography</p>
            <h3 className="font-weight-bold mb-3 pb-1">Hello World!</h3>
          </div>
        </div>

        <div className="face back">
          <div className="card-body">
            <a className="rotate-btn" data-card="card-1"><i className="fas fa-undo" />Plus de détails ici</a>
          </div>
        </div>
      </div>
    </div>
  ))
};

// == Export
export default CardRecipe;
