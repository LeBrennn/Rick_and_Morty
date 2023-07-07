import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import { BrowserRouter } from "react-router-dom";
import { Provider } from 'react-redux';
import {store} from './Redux/store';

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>  {/* encierro mi app en browser para que funcione la configuracion de las Routes en app.js */}
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);
