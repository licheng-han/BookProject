import React,{Fragment}from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {GlobalStyle} from './style.js';
import {FontStyle} from './statics/iconfont/iconfont';

ReactDOM.render(
  // <React.StrictMode>
    <Fragment>
      <App />
        <GlobalStyle />
        <FontStyle />
    </Fragment>,
  // </React.StrictMode>,
  document.getElementById('root')
);
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
