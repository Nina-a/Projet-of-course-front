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
        <div className="div_home_img">
          <a href="./recipes">
            <img className="homeimg" src={recette} alt="liste des courses" />
          </a>
        </div>
        <div className="div_home_p"><p>1) Commencez par choisir votre recette</p></div>
      </div>
      <div className="agenda">
        <div className="div_agenda_img">
          <a href="./planning">
            <img className="homeimg" src={planning} alt="liste des courses" />
          </a>
        </div>
        <div className="div_agenda_p">
          <p>2) Plannifiez vos repas en un clin d'oeil</p>
        </div>
      </div>
      <div className="course">
        <div className="div_course_img">
          <a href="./shoppingList">
            <img className="homeimg" src={course} alt="liste des courses" />
          </a>
        </div>
        <div className="div_course_p">
          <p>3) Et voilà, votre liste de courses est prête !!</p>
        </div>
      </div>
    </div>
  </div>
);

// == Export
export default Home;
