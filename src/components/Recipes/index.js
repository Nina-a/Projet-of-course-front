// == Import npm
import React from 'react';
import PropTypes from 'prop-types';
import CardRecipe from './recipe';
// == Import
import './style.scss';

// TODO action sur les liens a
// TODO show active en className sur le bouton où l'on a appuyé
// TODO Requete a chaque fois que l'on change d'onglet
// == Composant
const Recipes = () => {
  return (
  <div>
    <div className="maintabsrecipes">
      <ul className="nav nav-tabs" id="myTab" role="tablist">
        <li className="nav-item-entree col-4">
          <a
            className="nav-link"
            id="home-tab"
            data-toggle="tab"
            href="#home"
            role="tab"
            aria-controls="home"
            aria-selected="true"
          >Entrée
          </a>
        </li>
        <li className="nav-item-plat col-4">
          <a
            className="nav-link"
            id="profile-tab"
            data-toggle="tab"
            href="#profile"
            role="tab"
            aria-controls="profile"
            aria-selected="false"
          >Plat
          </a>
        </li>
        <li className="nav-item-dessert col-4">
          <a
            className="nav-link"
            id="contact-tab"
            data-toggle="tab"
            href="#contact"
            role="tab"
            aria-controls="contact"
            aria-selected="false"
          >Dessert
          </a>
        </li>
      </ul>
      <div
        className="tab-content"
        id="myTabContent"
      >
        <div
          className="tab-pane fade show active"
          id="home"
          role="tabpanel"
          aria-labelledby="home-tab"
        >
          <CardRecipe list={recipe} />
        </div>
        <div
          className="tab-pane fade"
          id="profile"
          role="tabpanel"
          aria-labelledby="profile-tab"
        >
          Food truck fixie
          locavore, accusamus mcsweeney's marfa nulla single-origin coffee squid.
          Exercitation +1 labore velit,
          blog sartorial PBR leggings next level wes anderson artisan four loko
          farm-to-table craft beer twee. Qui photo booth letterpress, commodo
          enim craft beer mlkshk aliquip jean shorts ullamco ad vinyl cillum
          PBR. Homo nostrud organic, assumenda labore aesthetic magna delectus
          mollit. Keytar helvetica VHS$
          salvia yr, vero magna velit sapiente labore stumptown.
          Vegan fanny pack odio cillum wes anderson 8-bit,
          sustainable jean shorts beard ut DIY ethical culpa terry
          richardson biodiesel. Art party scenester
          stumptown, tumblr butcher vero sint qui sapiente accusamus tattooed echo park.
        </div>
        <div
          className="tab-pane fade"
          id="contact"
          role="tabpanel"
          aria-labelledby="contact-tab"
        >
          Etsy mixtap wayfarers,ethical wes anderson tofu before they sold
          out mcsweeney's organic lomo retro fanny pack
          lo-fi farm-to-table readymade. Messenger bag gentrify pitchfork tattooed
          craft beer, iphone skateboard
          locavore carles etsy salvia banksy hoodie helvetica. DIY synth PBR banksy
          irony. Leggings gentrify
          squid 8-bit cred pitchfork. Williamsburg banh mi whatever gluten-free, car
          les pitchfork biodiesel fixie
          etsy retro mlkshk vice blog. Scenester cred you probably haven't heard of
          them, vinyl craft beer blog
          stumptown. Pitchfork sustainable tofu synth chambray yr.
        </div>
      </div>
    </div>
  </div>
)},

Recipes.propTypes = {
  recipe: PropTypes.arrayOf({
    title: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
  }).isRequired,
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

