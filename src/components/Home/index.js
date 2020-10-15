import React from 'react';
import { link } from 'react-router-dom';
import course from '../../assets/images/courses.png';
import planning from '../../assets/images/planning.png';
import recette from '../../assets/images/recettes.png';
import fleche from '../../assets/images/fleche.png';

import nom from '../../assets/images/nom.png';
// == Import
import './style.scss';

// == Composant
const Home = () => (
  <div className="home">
    <div className="maindiv">
      <div className="recette">
        <a href="./recipes">
          <img className="homeimg" src={recette} alt="liste des courses" />
        </a>
        <p>1) Commencez par choisir votre recette</p>
      </div>
      <div className="agenda">
        <a href="./planning">
          <img className="homeimg" src={planning} alt="liste des courses" />
        </a>
        <p>2) Plannifiez vos repas en un clin d'oeil</p>
      </div>
      <div className="course">
        <a href="./shoppingList">
          <img className="homeimg" src={course} alt="liste des courses" />
        </a>
        <p>3) Et voilà, votre liste de courses est prête !!</p>
      </div>
    </div>
  </div>
);

// == Export
export default Home;
