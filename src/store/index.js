// == Import : npm
import { createStore, compose, applyMiddleware } from 'redux';

// == Import : local
import rootReducer from 'src/reducers';
import accountMiddleware from '../middleware/accountMiddleware';
import recipesMiddleware from '../middleware/recipesMiddleware';
import recipeFormMiddleware from '../middleware/recipeFormMidlleware'
// == Enhancers
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const enhancers = composeEnhancers(
  applyMiddleware(
    accountMiddleware,
    recipesMiddleware,
    recipeFormMiddleware,
  ),
);

// == Store
const store = createStore(
  rootReducer,
  enhancers,
);

// == Export
export default store;
