/** @format */

import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { toastError, toastSuccess } from 'components/Helpers';

// axios.defaults.baseURL = `http://localhost:4000/api`;
axios.defaults.baseURL = `https://rent-cars-api.onrender.com/api`;

export const downloadCars = createAsyncThunk('cars/fetching', async (credentials, thunkAPI) => {
	try {
		const res = await axios.get('/cars', { params: credentials });
		toastSuccess(`Fetching cars successfull`);
		return res.data;
	} catch ({ response }) {
		toastError(response?.data?.message);
		return thunkAPI.rejectWithValue(response);
	}
});
