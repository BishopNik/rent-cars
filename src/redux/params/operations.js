/** @format */

import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { toastError } from 'components/Helpers';

export const getParams = createAsyncThunk('params/fetching', async (params, thunkAPI) => {
	try {
		const res = await axios.get('/params');
		return res.data;
	} catch ({ response }) {
		toastError(response?.data?.message || 'An error occurred while fetching params');
		return thunkAPI.rejectWithValue(response);
	}
});
