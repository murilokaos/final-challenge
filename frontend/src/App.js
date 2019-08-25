import React from 'react';
import { Provider } from 'react-redux';
import { Router } from 'react-router-dom';
import history from 'services/history';
import Routes from './routes';

import './config/reactotronConfig';
import store from './store';

import 'assets/css/index.css';

function App() {
  return (
    <Provider store={store}>
      <Router history={history}>
        <Routes />
      </Router>
    </Provider>
  );
}

export default App;
