import React from 'react';
import ReactDOM from 'react-dom';

import { Router, Route, browserHistory } from 'react-router';

import { routes } from './route'

const routes = (
  <Router history={ browserHistory } routes={routes} />
);

ReactDOM.render(routes, document.querySelector('#app'));
