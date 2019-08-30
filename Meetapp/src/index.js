import React from 'react';
import { StatusBar } from 'react-native';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/lib/integration/react';
import AppContainer from 'App';
import 'config/reactotronConfig';
import { store, persistor } from 'store';
import { secondary } from 'services/utils/colors';

const App = () => {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <StatusBar barStyle="light-content" backgroundColor={secondary} />
        <AppContainer />
      </PersistGate>
    </Provider>
  );
};

export default App;
