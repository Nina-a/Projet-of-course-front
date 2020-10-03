import { connect } from 'react-redux';

import Recipes from '../components/Recipes';

// import reducerrecipes from '../reducers/recipes';

const mapState = null;
// console.log('state', state);
// console.log('reducerrecipes', reducerrecipes);
// console.log(state.reducerrecipes, 'state.reducerrecipes');

const mapDispatch = null;
// == Besoin d'envoyer des actions jusqu'au reducer
// == On aura besoin de modifier la liste en fonction des stocks

export default connect(mapState, mapDispatch)(Recipes);
