import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import { createBrowserHistory } from 'history';

import App from '../components/App/App';
import store from './configureStore';

const history = createBrowserHistory();

const routes = (
  <Provider store={store}>
    <Router history={history} >
      <App />
    </Router>
  </Provider>
);

export default routes;