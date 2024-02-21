/** @format */

import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { toastError, toastSuccess } from 'components/Helpers';

axios.defaults.baseURL = `https://todos-api-i1vi.onrender.com/api`;

const setAuthHeader = token => {
  axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};

const clearAuthHeader = () => {
  axios.defaults.headers.common.Authorization = '';
};

export const register = createAsyncThunk(
  'auth/register',
  async (credentials, thunkAPI) => {
    try {
      const res = await axios.post('auth/register', credentials);
      setAuthHeader(res.data.token);
      toastSuccess(`Registration successful`);
      return res.data;
    } catch ({ response }) {
      return toastError(response?.data?.message);
    }
  }
);

export const logIn = createAsyncThunk(
  'auth/login',
  async (credentials, thunkAPI) => {
    try {
      const res = await axios.post('/auth/login', credentials);
      setAuthHeader(res.data.token);
      toastSuccess(`Login successful`);
      return res.data;
    } catch ({ response }) {
      toastError(response?.data?.message);
      return thunkAPI.rejectWithValue(response);
    }
  }
);

export const logOut = createAsyncThunk('auth/logout', async (_, thunkAPI) => {
  try {
    await axios.post('/auth/logout');
    toastSuccess(`Logout successful`);
    clearAuthHeader();
    window.location.reload();
  } catch ({ response }) {
    return toastError(response?.data?.message);
  }
});

export const refreshUser = createAsyncThunk(
  'auth/refresh',
  async (_, thunkAPI) => {
    const state = thunkAPI.getState();
    const persistedToken = state.auth.token;

    if (persistedToken === null) {
      return thunkAPI.rejectWithValue(`Not valid token`);
    }

    try {
      setAuthHeader(persistedToken);
      const res = await axios.get('/auth/current');
      return res.data;
    } catch ({ response }) {
      toastError(`Please log in`);
      return thunkAPI.rejectWithValue(response?.data?.message);
    }
  }
);

export const changeTheme = createAsyncThunk(
  'auth/theme',
  async (thema, thunkAPI) => {
    try {
      const res = await axios.patch('users/thema', { thema });
      return res.data;
    } catch ({ response }) {
      toastError(response?.data?.message);
      return thunkAPI.rejectWithValue(response?.data?.message);
    }
  }
);

export const changeUserInfo = createAsyncThunk(
  'user/update',
  async ({ avatarURL, email, name, password }, thunkAPI) => {
    try {
      const formData = new FormData();
      formData.append('avatarURL', avatarURL);
      formData.append(`email`, email);
      formData.append('password', password);
      formData.append('name', name);
      if (avatarURL) {
        const res = await axios.patch(`users/update-user`, formData);
        if (password) setAuthHeader(res.data.token);
        toastSuccess(`Success update`);
        return res.data;
      } else {
        const res = await axios.patch(`users/update-user`, {
          email,
          password,
          name,
        });
        if (password) setAuthHeader(res.data.token);
        toastSuccess(`Success update`);
        return res.data;
      }
    } catch ({ response }) {
      toastError(response?.data?.message);
      return thunkAPI.rejectWithValue(response?.data?.message);
    }
  }
);
