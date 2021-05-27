// == Import npm
import React from 'react';
import { NavLink } from 'react-router-dom';

// == Import intern
import './style.scss';
import course from '../../assets/images/courses.png';
import planning from '../../assets/images/planning.png';
import recette from '../../assets/images/recettes.png';

// == Composant
const Home = () => (
  <div className="home">
    <div className="maindiv">
      <div className="recette">
        <div className="div_home_img">
          <NavLink exact className="navigation-link" to="/recipes">
            <img className="homeimg" src={recette} alt="liste des courses" />
          </NavLink>
        </div>
        <div className="div_home_p"><p>1) Commencez par choisir vos recettes</p></div>
      </div>
      <div className="agenda">
        <div className="div_agenda_img">
            <img className="homeimg" src={planning} alt="liste des courses" />

        </div>
        <div className="div_agenda_p">
          <p>2) Plannifiez vos repas en un clin d'oeil</p>
        </div>
      </div>
      <div className="course">
        <div className="div_course_img">
            <img className="homeimg" src={course} alt="liste des courses" />
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
