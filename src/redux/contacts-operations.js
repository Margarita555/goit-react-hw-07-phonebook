import { createAsyncThunk } from '@reduxjs/toolkit';
import * as contactsApi from '../services/contacts-api.js';

export const fetchContacts = createAsyncThunk(
  'contacts/fetchContacts',
  async (_, { rejectWithValue }) => {
    try {
      const contacts = await contactsApi.fetchContacts();
      return contacts;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  },
);

export const addContact = createAsyncThunk(
  'contacts/addContact',
  async ({ name, phone }, { rejectWithValue }) => {
    const newContact = {
      name,
      phone,
    };
    try {
      const contact = await contactsApi.addContact(newContact);
      return contact;
    } catch (error) {
      return rejectWithValue(error);
    }
  },
);

export const deleteContact = createAsyncThunk(
  'contacts/deleteContact',
  async (id, { rejectWithValue, dispatch }) => {
    try {
      await contactsApi.deleteContact(id);
      dispatch(deleteContact.fulfilled(id));
    } catch (error) {
      return rejectWithValue(error);
    }
  },
);
