import React from 'react';
import ReactDOM from 'react-dom/client';
//Añadimos Bootstrap a nuesto proyecto
import 'bootstrap/dist/css/bootstrap.css'
// !Importante los estilos propiios deben ir debajo de bootstrap para que no lo pise
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

reportWebVitals();
