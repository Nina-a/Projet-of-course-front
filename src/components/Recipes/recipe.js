// == Import npm
import React from 'react';
import PropTypes from 'prop-types';

// == Import
import './recipe.scss';

// == Composant

const CardRecipe = ({
  recipe,
  moreDetails,
  addToFavorites,
  addToPlanning,
}) => {
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
              <h3 className="font-weight-bold mb-3 pb-1">string.to{recipeDetail.title}</h3>
            </div>
          </div>
            <div className="card-body">
              <div className="divbutton">
                <button className="button-favorite" type="button" onClick={addToFavorites}> Coeur</button>
                <select name={recipeDetail.title} onChange={addToPlanning}>
                  <option value="0">Ajouter au planning</option>
                  <option value="1">Lundi midi</option>
                  <option value="2">Lundi soir</option>
                  <option value="3">mardi midi</option>
                  <option value="4">mardi soir</option>
                  <option value="5">mercredi midi</option>
                  <option value="6">mercredi soir</option>
                  <option value="7">jeudi midi</option>
                  <option value="8">jeudi soir</option>
                  <option value="9">vendredi midi</option>
                  <option value="10">vendredi soir</option>
                  <option value="11">samedi midi</option>
                  <option value="12">samedi soir</option>
                  <option value="13">dimanche midi</option>
                  <option value="14">dimanche soir</option>
                </select>
              </div>
              <a className="rotate-btn" data-card="card-1">
                <i className="fas fa-undo" />
                <button className="button-details" type="button" onClick={moreDetails}>Plus de détail</button>
              </a>
            </div>
      
const CardRecipe = ({ recipe, addToPlanning }) => {
  console.log(recipe);
  return (
    recipe.map((recipeDetail) => (
      <div key={recipeDetail.id} className="card">
        <img className="card-img-top" src={recipeDetail.picture} alt="Card cap" />
        <div className="card-body">
          <h5 className="card-title">{recipeDetail.title}</h5>
          <div className="divButton">
            <button type="button" className="btn btn-secondary">Ajouter au favoris</button>
            <select
              className="btn btn-primary"
              name={recipeDetail.title}
              onChange={(e) => addToPlanning(recipeDetail, e.target.value,
                recipeDetail.categories[0].title)}
            >
              <option value="0">Choississez un jour</option>
              <option value="1">Lundi midi</option>
              <option value="2">Lundi soir</option>
              <option value="3">Mardi midi</option>
              <option value="4">Mardi soir</option>
              <option value="5">Mercredi midi</option>
              <option value="6">Mercredi soir</option>
              <option value="7">Jeudi midi</option>
              <option value="8">Jeudi soir</option>
              <option value="9">Vendredi midi</option>
              <option value="10">Vendredi soir</option>
              <option value="11">Samedi midi</option>
              <option value="12">Samedi soir</option>
              <option value="13">Dimanche midi</option>
              <option value="14">Dimanche soir</option>
            </select>
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
      id: PropTypes.number.isRequired,
    }).isRequired,
  ),
card-actions
  moreDetails: PropTypes.func.isRequired,
  addToPlanning: PropTypes.func.isRequired,
  addToFavorites: PropTypes.func.isRequired, 
  addToPlanning: PropTypes.func.isRequired,

};
// == Export
export default CardRecipe;
