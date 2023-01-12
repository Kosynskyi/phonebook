import { createSlice } from '@reduxjs/toolkit';
import {
  registration,
  login,
  logOut,
  fetchCurrentUser,
} from './authOperations';

const initialState = {
  user: { name: null, email: null },
  token: null,
  isLoggedIn: false,
  isLoading: false,
  isFetchingCurrentUser: false,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: {
    // ==========registration==========
    [registration.pending]: state => {
      state.isLoading = true;
    },
    [registration.fulfilled]: (state, { payload }) => {
      state.user = payload.user;
      state.token = payload.token;
      state.isLoggedIn = true;
      state.isLoading = false;
    },
    [registration.rejected]: state => {
      state.isLoading = false;
    },
    // ==========login==========
    [login.pending]: state => {
      state.isLoading = true;
    },
    [login.fulfilled]: (state, { payload }) => {
      state.user = payload.user;
      state.token = payload.token;
      state.isLoggedIn = true;
      state.isLoading = false;
    },
    [login.rejected]: state => {
      state.isLoading = false;
    },
    // ==========logout==========
    [logOut.pending]: state => {
      state.isLoading = true;
    },
    [logOut.fulfilled]: state => {
      state.user.name = null;
      state.user.email = null;
      state.token = null;
      state.isLoggedIn = false;
      state.isLoading = false;
    },
    [logOut.rejected]: state => {
      state.isLoading = false;
    },
    // ==========fetchCurrentUser==========
    [fetchCurrentUser.pending]: state => {
      state.isLoading = true;
      state.isFetchingCurrentUser = true;
    },
    [fetchCurrentUser.fulfilled]: (state, { payload }) => {
      state.user = payload;
      state.isLoggedIn = true;
      state.isLoading = false;
      state.isFetchingCurrentUser = false;
    },
    [fetchCurrentUser.rejected]: state => {
      state.isLoading = false;
      state.isFetchingCurrentUser = false;
    },
  },
});

export const authReducer = authSlice.reducer;
