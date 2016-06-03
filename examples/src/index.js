import React from 'react';
import ReactDOM from 'react-dom';

import { Router, Route, hashHistory } from 'react-router';

import { routes } from './route'

ReactDOM.render((
  <Router history={ hashHistory } routes={routes}></Router>
), document.getElementById('app'))
