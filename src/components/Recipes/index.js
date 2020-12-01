// == Import npm
import React from 'react';
import PropTypes from 'prop-types';

import { Button } from 'react-bootstrap';

// == Import
import './style.scss';
import { Link } from 'react-router-dom';
import CardRecipe from '../../containers/Recipe';
import Tabs from '../Tabs';
// TODO action sur les liens a
// TODO show active en className sur le bouton où l'on a appuyé

// == Composant
const Recipes = (
  {
    listEntree, listPlat, listDessert, isLogged,
  },
) => {
  console.log('plop');

  return (
    <div className="recipesDiv">
      <h1 className="recipes-title">Liste des recettes</h1>
      <div className="maintabsrecipes">
        {isLogged && (
          <div className="button_add_recipe">
            <Link to="/addRecipe">
              <Button className="add_recipe" variant="success" size="lg">
                Ajouter une recette
              </Button>
            </Link>
          </div>
        )}

        <Tabs>
          <div label="Entrées" className="entree">
            <div className="card-group">
              <CardRecipe recipe={listEntree} />
            </div>
          </div>
          <div label="Plats">
            <div className="card-group">
              <CardRecipe recipe={listPlat} />
            </div>
          </div>
          <div label="Desserts">
            <div className="card-group">
              <CardRecipe recipe={listDessert} />
            </div>
          </div>
        </Tabs>
      </div>
    </div>
  );
};
// == PropTypes
Recipes.propTypes = {
  listEntree: PropTypes.array.isRequired,
  listPlat: PropTypes.array.isRequired,
  listDessert: PropTypes.array.isRequired,
  isLogged: PropTypes.bool.isRequired,
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
