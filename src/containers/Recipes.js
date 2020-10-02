import { connect } from 'react-redux';

import Recipes from '../components/Recipes';
// import reducerrecipes from '../reducers/recipes';

const mapState = null;
// == Besoin de consulter et d'envoyer des informations
// == On a besoin des ingrédients des listes des recettes ajouter par l'utilisateur

const mapDispatch = null;
// == Besoin d'envoyer des actions jusqu'au reducer
// == On aura besoin de modifier la liste en fonction des stocks

export default connect(mapState, mapDispatch)(Recipes);
