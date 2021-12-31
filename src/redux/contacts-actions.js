import { createAction } from '@reduxjs/toolkit';
import { nanoid } from 'nanoid';

export const addContact = createAction('contacts/add', (name, number) => ({
  payload: {
    id: nanoid(),
    name,
    number,
  },
}));

export const deleteContact = createAction('contacts/delete');

export const changeFilter = createAction('contacts/changeFilter');

// export default { addContact, deleteContact, changeFilter };

// export const addContact = (name, number) => ({
//   type: 'contacts/add',
//   payload: {
//     id: nanoid(),
//     name,
//     number,
//   },
// });

// export const deleteContact = name => ({
//   type: 'contacts/delete',
//   payload: name,
// });

// export const changeFilter = value => ({
//   type: 'contacts/changeFilter',
//   payload: value,
// });
