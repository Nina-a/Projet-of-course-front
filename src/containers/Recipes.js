import { connect } from 'react-redux';
import Recipes from '../components/Recipes';

// == Besoin de consulter et d'envoyer des informations
// == On a besoin des ingrédients des listes des recettes ajouter par l'utilisateur
const mapState = null 

// == Besoin d'envoyer des actions jusqu'au reducer
// == On aura besoin de modifier la liste en fonction des stocks
const mapDispatch = null;

export default connect(mapState, mapDispatch)(Recipes);
