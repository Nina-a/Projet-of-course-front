import React from 'react';
import { link } from 'react-router-dom';
import course from '../../assets/images/courses.png';
import planning from '../../assets/images/planning.png';
import recette from '../../assets/images/recettes.png';
import nom from '../../assets/images/nom.png';
// == Import
import './style.scss';

// == Composant
const Home = () => (
  <div className="home">
    <div>
      <div className="nom">
        <img src={nom} alt="nom" />
      </div>
      <div className="image_home">
        <img src={recette} alt="liste des courses" />
      </div>
      <div>
        <img src={planning} alt="liste des courses" />
      </div>
      <div>
        <img src={course} alt="liste des courses" />
      </div>
    </div>
  </div>
);

// == Export
export default Home;
