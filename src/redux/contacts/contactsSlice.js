import { createSlice } from '@reduxjs/toolkit';
import {
  getContacts,
  createContact,
  deleteContact,
} from './contactsOperations';

const initialState = {
  contacts: [],
  isLoading: false,
};

const contactsSlice = createSlice({
  name: 'contacts',
  initialState,
  extraReducers: {
    // ==========getContacts==========
    [getContacts.pending]: state => {
      state.isLoading = true;
    },
    [getContacts.fulfilled]: (state, { payload }) => {
      state.contacts = payload;
      state.isLoading = false;
    },
    [getContacts.rejected]: state => {
      state.isLoading = false;
    },

    // ==========createContact==========
    [createContact.pending]: state => {
      state.isLoading = true;
    },
    [createContact.fulfilled]: (state, { payload }) => {
      state.contacts = [...state.contacts, payload];
      state.isLoading = false;
    },
    [createContact.rejected]: state => {
      state.isLoading = false;
    },

    // ==========deleteContact==========
    [deleteContact.pending]: state => {
      state.isLoading = true;
    },
    [deleteContact.fulfilled]: (state, { payload }) => {
      state.contacts = state.contacts.filter(({ id }) => id !== payload);
      state.isLoading = false;
    },
    [deleteContact.rejected]: state => {
      state.isLoading = false;
    },
  },
});

export const contactsReducer = contactsSlice.reducer;
