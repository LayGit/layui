import React from 'react';
import ReactDOM from 'react-dom';

import { Router, Route, browserHistory } from 'react-router';

import App from './views/App';

const routes = (
  <Router history={ browserHistory }>
    <Route path="/" component={App}/>
  </Router>
);

ReactDOM.render(routes, document.querySelector('#app'));
