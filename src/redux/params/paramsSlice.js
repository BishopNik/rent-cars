/** @format */

import { createSlice } from '@reduxjs/toolkit';
import { getParams } from './operations';

const initialState = {
	makes: [],
	min: 0,
	max: 0,
	isLoading: false,
};

const paramsSlice = createSlice({
	name: 'params',
	initialState,
	reducers: {
		clearState: state => {
			state.makes = [];
			state.min = 0;
			state.max = 0;
		},
	},
	extraReducers: builder => {
		builder
			.addCase(getParams.pending, state => {
				state.isLoading = true;
			})
			.addCase(getParams.fulfilled, (state, { payload }) => {
				const { makes, price } = payload;
				state.makes = makes;
				state.min = price.min;
				state.max = price.max;
				state.isLoading = false;
			})
			.addCase(getParams.rejected, state => {
				state.isLoading = false;
			});
	},
});

export const paramsReducer = paramsSlice.reducer;

export const { clearState } = paramsSlice.actions;
