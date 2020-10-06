// == Import npm
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import CardRecipe from '../../containers/Recipe';
// == Import
import './style.scss';

// TODO action sur les liens a
// TODO show active en className sur le bouton où l'on a appuyé

// == Composant
const Recipes = ({ listEntree, listPlat, listDessert }) => {
  const [selectedTab, setSelectedTab] = useState('entree');

  return (
    <div>
      <div className="maintabsrecipes">
        <ul className="nav nav-tabs" id="myTab" role="navigation">
          <li className="nav-item-entree col-4">
            <a
              className="nav-link"
              id="entree-tab"
              data-toggle="tab"
              href="#entree"
              role="tab"
              aria-controls="entree"
              aria-selected="true"
              onClick={() => setSelectedTab('entree')}
            >
              Entrée
            </a>
          </li>
          <li className="nav-item-plat col-4">
            <a
              className="nav-link"
              id="plat-tab"
              data-toggle="tab"
              href="#plat"
              role="tab"
              aria-controls="plat"
              aria-selected="false"
              onClick={() => setSelectedTab('plat')}
            >
              Plat
            </a>
          </li>
          <li className="nav-item-dessert col-4">
            <a
              className="nav-link"
              id="dessert-tab"
              data-toggle="tab"
              href="#dessert"
              role="tab"
              aria-controls="dessert"
              aria-selected="false"
              onClick={() => setSelectedTab('dessert')}
            >
              Dessert
            </a>
          </li>
        </ul>
        <div className="tab-content" id="myTabContent">
          <div
            className={`tab-pane fade ${selectedTab === 'entree' ? 'show active' : ''}`}
            id="home"
            role="tabpanel"
            aria-labelledby="home-tab"
          >
            <div className="card-group">
              <CardRecipe recipe={listEntree} />
            </div>
          </div>
          <div
            className={`tab-pane fade ${selectedTab === 'plat' ? 'show active' : ''}`}
            id="profile"
            role="tabpanel"
            aria-labelledby="profile-tab"
          >
            <div className="card-group">
              <CardRecipe recipe={listPlat} />
            </div>
          </div>
          <div
            className={`tab-pane fade ${selectedTab === 'dessert' ? 'show active' : ''}`}
            id="contact"
            role="tabpanel"
            aria-labelledby="contact-tab"
          >
            <div className="card-group">
              <CardRecipe recipe={listDessert} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
// == PropTypes
Recipes.propTypes = {
  listEntree: PropTypes.array.isRequired,
  listPlat: PropTypes.array.isRequired,
  listDessert: PropTypes.array.isRequired,
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
