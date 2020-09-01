import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { createWrapper } from 'next-redux-wrapper';
import rootReducer from './rootReducer';

const makeStore = ({ isServer }) => {
  if (isServer) {
    return configureStore({
      reducer: rootReducer,
    });
  }
  const persistConfig = {
    key: 'nextjs',
    storage,
  };

  const persistedReducer = persistReducer(persistConfig, rootReducer);

  const store = configureStore({
    reducer: persistedReducer,
    middleware: getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: ['persist/PERSIST'],
      },
    }),
  });

  store.persistor = persistStore(store);
  return store;
};

const wrapper = createWrapper(makeStore, { debug: false });

export default wrapper;
