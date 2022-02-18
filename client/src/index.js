import React from 'react';
import ReactDOM, { render } from 'react-dom';
import './index.css';
import './assets/styles/small-library.css'
import './assets/styles/style.sass'
import App from './App';
import {BrowserRouter} from 'react-router-dom';
import {Provider} from 'react-redux'
import store from './store';

ReactDOM.render(
  <BrowserRouter>
    <Provider store={store}>
    <App />
    </Provider>
  </BrowserRouter>,
  document.getElementById('root')
);