import { configureStore } from "@reduxjs/toolkit";
import MovieReducer from './MovieSlice';
// import storage from 'redux-persist/lib/storage';
import { persistReducer, persistStore } from 'redux-persist';
import thunk from 'redux-thunk';
import storageSession from 'reduxjs-toolkit-persist/lib/storage/session'


const persistConfig = {
  key: 'root',
  storage:storageSession,
}

const persistedReducer = persistReducer(persistConfig, MovieReducer)
export const store = configureStore ({
    reducer: {
        moviesReducer: persistedReducer
    },
    middleware: [thunk]
});
export const persistor = persistStore(store)