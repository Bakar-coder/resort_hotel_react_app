import React from 'react';
import ReactDom from 'react-dom';
import './App.css';
import App from './App'
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux'
import store from "./store";
ReactDom.render(
  <Provider store={store}>
    <BrowserRouter><App/></BrowserRouter>
  </Provider>,
  document.getElementById('root'));