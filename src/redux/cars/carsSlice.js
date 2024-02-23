/** @format */

import { createSlice } from '@reduxjs/toolkit';
import { downloadCars } from './operations';

const initialState = {
	items: [],
	currentPage: 0,
	totalItems: 0,
	isLoading: false,
};

const carsSlice = createSlice({
	name: 'cars',
	initialState,
	reducers: {
		clearState: state => {
			state.items = [];
			state.currentPage = 0;
			state.totalItems = 0;
		},
	},
	extraReducers: builder => {
		builder
			.addCase(downloadCars.pending, state => {
				state.isLoading = true;
			})
			.addCase(downloadCars.fulfilled, (state, { payload }) => {
				const { countCars, data } = payload;
				if (!data.length) {
					state.isLoading = false;
					return;
				}
				state.totalItems = countCars;
				state.currentPage = state.currentPage + 1;
				state.items = [...state.items, ...data];
				state.isLoading = false;
			})
			.addCase(downloadCars.rejected, state => {
				state.isLoading = false;
			});
	},
});

export const carsReducer = carsSlice.reducer;

export const { clearState } = carsSlice.actions;
