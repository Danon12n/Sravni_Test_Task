import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter } from "react-router-dom";
import { Provider } from 'react-redux'

import { store } from "./store/index"
import './styles/global.scss';

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <div className='global'>
        <App />
      </div>
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);