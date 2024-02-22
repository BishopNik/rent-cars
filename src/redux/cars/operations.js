/** @format */

import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { toastError, toastSuccess } from 'components/Helpers';

axios.defaults.baseURL = `https://todos-api-i1vi.onrender.com/api`;

export const downloadCars = createAsyncThunk('cars/fetching', async (credentials, thunkAPI) => {
	try {
		const res = await axios.get('cars/fetching', credentials);
		toastSuccess(`Fetching cars successfull`);
		return res.data;
	} catch ({ response }) {
		toastError(response?.data?.message);
		return thunkAPI.rejectWithValue(response);
	}
});
