import React from 'react';
import ReactDOM from 'react-dom/client'; // Importez createRoot à partir de react-dom/client
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { ThemeProvider } from './ThemeContext';

// Créez un root avec createRoot
const root = ReactDOM.createRoot(document.getElementById('root'));

// Utilisez le root pour rendre l'application
root.render(
  <React.StrictMode>
    <ThemeProvider>
      <App />
    </ThemeProvider>
  </React.StrictMode>
);

// Si vous voulez commencer à mesurer la performance dans votre application,
// passez une fonction pour enregistrer les résultats (par exemple : reportWebVitals(console.log))
// ou envoyez-les à un point de terminaison d'analyse. En savoir plus : https://bit.ly/CRA-vitals
reportWebVitals();
