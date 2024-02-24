/** @format */

import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	items: [],
};

const favoritesSlice = createSlice({
	name: 'favorites',
	initialState,
	reducers: {
		addFavorite: (state, { payload }) => {
			state.items.push(payload);
		},
		removeFavorite: (state, { payload }) => {
			const { _id } = payload;
			state.items = state.items.filter(i => i._id !== _id);
		},
	},
});

export const favoritesReducer = favoritesSlice.reducer;

export const { addFavorite, removeFavorite } = favoritesSlice.actions;
