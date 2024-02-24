/** @format */

import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { toastError, toastSuccess } from 'components/Helpers';

// axios.defaults.baseURL = `http://localhost:4000/api`;
axios.defaults.baseURL = `https://rent-cars-api.onrender.com/api`;

export const getCars = createAsyncThunk('cars/fetching', async (params, thunkAPI) => {
	try {
		const res = await axios.get('/cars', {
			params: Object.fromEntries(Object.entries(params).filter(([_, v]) => v !== '')),
		});
		toastSuccess(`Fetching cars successful`);
		return res.data;
	} catch ({ response }) {
		toastError(response?.data?.message || 'An error occurred while fetching cars');
		return thunkAPI.rejectWithValue(response);
	}
});
