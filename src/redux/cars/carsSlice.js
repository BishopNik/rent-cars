/** @format */

import { createSlice } from '@reduxjs/toolkit';
import { downloadCars } from './operations';
import carDetails from 'data/adsCars.json';

const initialState = {
	items: carDetails,
	isLoading: false,
};

const carsSlice = createSlice({
	name: 'cars',
	initialState,
	extraReducers: builder => {
		builder
			.addCase(downloadCars.pending, state => {
				state.isLoading = true;
			})
			.addCase(downloadCars.fulfilled, (state, { payload }) => {
				if (payload === undefined) {
					state.isLoading = false;
					return;
				}
				state.items.push(payload);
				state.isLoading = false;
			})
			.addCase(downloadCars.rejected, state => {
				state.isLoading = false;
			});
	},
});

export const carsReducer = carsSlice.reducer;
