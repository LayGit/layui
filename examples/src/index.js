import React from 'react';
import ReactDOM from 'react-dom';

import { Router, Route, browserHistory } from 'react-router';

import { routes } from './route'

ReactDOM.render((
  <Router history={browserHistory} routes={routes}></Router>
), document.getElementById('app'))
