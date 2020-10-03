// == Import npm
import React from 'react';
import PropTypes from 'prop-types';
import CardRecipe from '../../containers/Recipe';
// == Import
import './style.scss';

// TODO action sur les liens a
// TODO show active en className sur le bouton où l'on a appuyé

// == Composant
const Recipes = ({ onClick }) => (
  <div>
    <div className="maintabsrecipes">
      <ul className="nav nav-tabs" id="myTab" role="navigation">
        <li className="nav-item-entree col-4">
          <a
            className="nav-link"
            id="entree-tab"
            data-toggle="tab"
            href="#home"
            role="tab"
            aria-controls="home"
            aria-selected="true"
            onClick={onClick}
          >
            Entrée
          </a>
        </li>
        <li className="nav-item-plat col-4">
          <a
            className="nav-link"
            id="plat-tab"
            data-toggle="tab"
            href="#profile"
            role="tab"
            aria-controls="profile"
            aria-selected="false"
            onClick={onClick}
          >
            Plat
          </a>
        </li>
        <li className="nav-item-dessert col-4">
          <a
            className="nav-link"
            id="dessert-tab"
            data-toggle="tab"
            href="#contact"
            role="tab"
            aria-controls="contact"
            aria-selected="false"
            onClick={onClick}
          >
            Dessert
          </a>
        </li>
      </ul>
      <div className="tab-content" id="myTabContent">
        <div
          className="tab-pane fade show active"
          id="home"
          role="tabpanel"
          aria-labelledby="home-tab"
        >
          <CardRecipe />
        </div>
        <div
          className="tab-pane fade"
          id="profile"
          role="tabpanel"
          aria-labelledby="profile-tab"
        >
          Je suis un plat
        </div>
        <div
          className="tab-pane fade"
          id="contact"
          role="tabpanel"
          aria-labelledby="contact-tab"
        >
          Je suis un dessert
        </div>
      </div>
    </div>
  </div>
);

Recipes.propTypes = {
  onClick: PropTypes.func.isRequired,
};
// == Export
export default Recipes;

/* <h1> Recipes </h1>
      {
      recipe.map((recipeDetail) => (
        <div className"card">
          <img className"card-image" alt="illustration" src={recipeDetail.picture} />
          <div className"card-infos">
            <button className"add planning" type="button" id="{recipeDetail.id}">+</button>
            <button className"add favorite" type="button">&#9825;</button>
            <h3 className"card-title">{recipeDetail.title}</h3>
            <a className"active">Lien vers la recette</a>
          </div>
        </div>
      ))
    }; */
