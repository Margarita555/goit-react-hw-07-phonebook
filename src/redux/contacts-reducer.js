import { createReducer } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import {
  fetchContacts,
  addContact,
  deleteContact,
} from './contacts-operations';
import { changeFilter } from './contacts-actions';

const items = createReducer([], {
  [fetchContacts.fulfilled]: (_, { payload }) => payload,
  [addContact.fulfilled]: (state, { payload }) => [payload, ...state],
  [deleteContact.fulfilled]: (state, { payload }) =>
    state.filter(contact => contact.id !== payload),
});

const loading = createReducer(false, {
  [fetchContacts.pending]: () => true,
  [fetchContacts.fulfilled]: () => false,
  [fetchContacts.rejected]: () => false,
  [addContact.pending]: () => true,
  [addContact.fulfilled]: () => false,
  [addContact.rejected]: () => false,
  [deleteContact.pending]: () => true,
  [deleteContact.fulfilled]: () => false,
  [deleteContact.rejected]: () => false,
});

const filter = createReducer('', {
  [changeFilter]: (_, { payload }) => payload,
});

const error = createReducer(null, {
  [fetchContacts.rejected]: (_, { payload }) => payload,
  [addContact.rejected]: (_, { payload }) => payload,
  [deleteContact.rejected]: (_, { payload }) => payload,
});

export default combineReducers({
  items,
  filter,
  loading,
  error,
});

// import {
//   addContactRequest,
//   addContactSuccess,
//   addContactError,
//   fetchContactsRequest,
//   fetchContactsSuccess,
//   fetchContactsError,
//   deleteContactRequest,
//   deleteContactSuccess,
//   deleteContactError,
//   changeFilter,
// } from './contacts-actions';

// const items = createReducer([], {
//   [fetchContactsSuccess]: (_, { payload }) => payload,
//   [addContactSuccess]: (state, { payload }) => [payload, ...state],
//   [deleteContactSuccess]: (state, { payload }) =>
//     state.filter(contact => contact.id !== payload),
// });

// const loading = createReducer(false, {
//   [fetchContactsRequest]: () => true,
//   [fetchContactsSuccess]: () => false,
//   [fetchContactsError]: () => false,
//   [addContactRequest]: () => true,
//   [addContactSuccess]: () => false,
//   [addContactError]: () => false,
//   [deleteContactRequest]: () => true,
//   [deleteContactSuccess]: () => false,
//   [deleteContactError]: () => false,
// });

// const filter = createReducer('', {
//   [changeFilter]: (_, { payload }) => payload,
// });

// const error = createReducer(null, {
//   [fetchContactsError]: (_, { payload }) => payload,
//   [addContactError]: (_, { payload }) => payload,
//   [deleteContactError]: (_, { payload }) => payload,
// });
