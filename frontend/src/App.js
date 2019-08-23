import React from 'react';
import { Provider } from 'react-redux';
import Routes from './routes';

import './config/reactotronConfig';
import store from './store';

import 'assets/css/index.css';

function App() {
  return (
    <Provider store={store}>
      <Routes />
    </Provider>
  );
}

export default App;
