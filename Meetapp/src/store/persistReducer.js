import storage from 'redux-persist/lib/storage';
import { persistReducer } from 'redux-persist';
import {
  seamlessImmutableReconciler,
  seamlessImmutableTransformCreator,
} from 'redux-persist-seamless-immutable';

const transformerConfig = {
  whitelistPerReducer: {
    reducer: ['user'],
  },
};

export default reducers =>
  persistReducer(
    {
      key: '@Meetapp',
      storage,
      stateReconciler: seamlessImmutableReconciler,
      transforms: [seamlessImmutableTransformCreator(transformerConfig)],
    },
    reducers
  );
