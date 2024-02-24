/** @format */

import { createSlice } from '@reduxjs/toolkit';
import { getCars } from './operations';

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
			.addCase(getCars.pending, state => {
				state.isLoading = true;
			})
			.addCase(getCars.fulfilled, (state, { payload }) => {
				const { totalCars, data } = payload;
				if (!data.length) {
					state.isLoading = false;
					return;
				}
				state.totalItems = totalCars;
				state.currentPage = state.currentPage + 1;
				const newData = data.filter(
					newItem => !state.items.some(item => item._id === newItem._id)
				);

				state.items = [...state.items, ...newData];
				state.isLoading = false;
			})
			.addCase(getCars.rejected, state => {
				state.isLoading = false;
			});
	},
});

export const carsReducer = carsSlice.reducer;

export const { clearState } = carsSlice.actions;
