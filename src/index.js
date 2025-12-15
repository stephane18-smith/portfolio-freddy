import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

const rootElement = document.getElementById('root');

if (rootElement) {
  const root = ReactDOM.createRoot(rootElement);
  root.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
} else {
  console.error('Root element not found!');
  document.body.innerHTML = `
    <div style="
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: black;
      color: gold;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      font-family: Arial, sans-serif;
      text-align: center;
      padding: 20px;
    ">
      <h1 style="color: #b22222; font-size: 2.5rem; margin-bottom: 20px;">
        ❌ Erreur d'initialisation
      </h1>
      <p style="font-size: 1.2rem; margin-bottom: 10px;">
        L'élément "root" n'a pas été trouvé.
      </p>
      <p style="font-size: 1rem; color: #ccc;">
        Vérifiez que votre fichier index.html contient &lt;div id="root"&gt;&lt;/div&gt;
      </p>
    </div>
  `;
}