import { connect } from 'react-redux';

import Recipes from '../components/Recipes';
// import reducerrecipes from '../reducers/recipes';

const mapState = (state) => {
  // console.log('state', state);
  // console.log('reducerrecipes', reducerrecipes);
  // console.log(state.reducerrecipes, 'state.reducerrecipes');
  console.log('state.reducerrecipes.list', state.reducerrecipes.list);
  return { listRecipe: state.reducerrecipes.list };
};

const mapDispatch = null;
// == Besoin d'envoyer des actions jusqu'au reducer
// == On aura besoin de modifier la liste en fonction des stocks

export default connect(mapState, mapDispatch)(Recipes);
