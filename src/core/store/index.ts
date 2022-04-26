import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import {
    persistReducer,
    persistStore,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
} from 'redux-persist';
import storage from 'redux-persist-indexeddb-storage';
import { SettingsSlice, SettingsState } from './slices';

const reducer = combineReducers({
    settings: SettingsSlice.reducer,
});

const persistConfig = {
    key: 'root',
    storage: storage('theBreakoutGameDB'),
    debug: true,
};
const persistedReducer = persistReducer(persistConfig, reducer);

export type Store = {
    settings: SettingsState;
};
export const createStore = () =>
    configureStore({
        reducer: persistedReducer,
        middleware: getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
            },
        }),
        devTools: process.env.NODE_ENV !== 'production',
    });
export const store = createStore();
export const persistor = persistStore(store);
