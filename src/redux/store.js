/** @format */

import {
	persistStore,
	persistReducer,
	FLUSH,
	REHYDRATE,
	PAUSE,
	PERSIST,
	PURGE,
	REGISTER,
} from 'redux-persist';
import { configureStore } from '@reduxjs/toolkit';
import storage from 'redux-persist/lib/storage';
import { carsReducer } from './cars/carsSlice';
import { paramsReducer } from './params/paramsSlice';
import { favoritesReducer } from './favorites/favotiresSlice';

const persistConfig = {
	key: 'favorites',
	storage,
	whitelist: ['items'],
};

const persistedReducer = persistReducer(persistConfig, favoritesReducer);

export const store = configureStore({
	reducer: {
		cars: carsReducer,
		params: paramsReducer,
		favorites: persistedReducer,
	},
	middleware: getDefaultMiddleware =>
		getDefaultMiddleware({
			serializableCheck: {
				ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
			},
		}),
	devTools: process.env.NODE_ENV === 'development',
});

export const persistor = persistStore(store);
