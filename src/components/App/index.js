// == Import npm
import React from 'react';

// == Import
import NavBar from '../NavBar';
import Footer from '../Footer';
import './styles.css';

// == Composant
const App = () => (
  <div className="app">
    <h1>Composant : App</h1>
    <NavBar />
    <Footer />
  </div>
);

// == Export
export default App;
