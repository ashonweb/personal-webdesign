import React from 'react';
import ReactDOM from 'react-dom';
import { Route, Link, BrowserRouter as Router } from 'react-router-dom'
import './index.css';
import { HashRouter } from 'react-router-dom'

import App from './App';
import About from './About';

import * as serviceWorker from './serviceWorker';
import {Route,Link,BrowserRouter as Router} from 'react-router-dom';
import { HashRouter } from 'react-router-dom'

ReactDOM.render(
  
  <HashRouter>
    <App />
</HashRouter>
  , document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
