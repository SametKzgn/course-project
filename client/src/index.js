import React from 'react';
import ReactDOM, { render } from 'react-dom';
import './index.css';
import './assets/styles/small-library.css'
import './assets/styles/style.sass'
import App from './App';


ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);