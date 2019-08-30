import { persistStore } from 'redux-persist';
import createSagaMiddleware from 'redux-saga';

import createStore from 'store/createStore';
import reducers from 'store/ducks';
import persistReducer from 'store/persistReducer';
import sagas from 'store/sagas';

const middlewares = [];

const sagaMonitor =
  process.env.NODE_ENV === 'development'
    ? console.tron.createSagaMonitor()
    : null;

const sagaMiddleware = createSagaMiddleware({ sagaMonitor });

middlewares.push(sagaMiddleware);

const store = createStore(persistReducer(reducers), middlewares);
const persistor = persistStore(store);

sagaMiddleware.run(sagas);

export { store, persistor };
