import { configureStore } from '@reduxjs/toolkit';
import contactsReducer from './contacts-reducer';

const middleware = getDefaultMiddleware =>
  getDefaultMiddleware({
    serializableCheck: {
      // Ignore these action types
      ignoredActions: ['contacts/fetchContactsError'],
      // Ignore these field paths in all actions
      ignoredActionPaths: ['payload'],
      // Ignore these paths in the state
      ignoredPaths: ['payload'],
    },
  });

const store = configureStore({
  reducer: {
    contacts: contactsReducer,
  },
  middleware,
});

export default store;

// import {
//   persistStore,
//   persistReducer,
//   FLUSH,
//   REHYDRATE,
//   PAUSE,
//   PERSIST,
//   PURGE,
//   REGISTER,
// } from 'redux-persist';
// import storage from 'redux-persist/lib/storage';
// import contactsReducer from './contacts-reducer';

// const persistConfig = {
//   key: 'root',
//   storage,
//   blacklist: ['filter'],
// };

// const store = () => {
//   let store = configureStore({
//     reducer: {
//       contacts: persistReducer(persistConfig, contactsReducer),
//     },
//     middleware: getDefaultMiddleware =>
//       getDefaultMiddleware({
//         serializableCheck: {
//           ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
//         },
//       }),
//     devTools: process.env.NODE_ENV === 'development',
//   });
//   let persistor = persistStore(store);
//   return { store, persistor };
// };

// export default store;

// import { createStore, combineReducers } from 'redux';
// import contactsReducer from './contacts-reducer';

// const rootReducer = combineReducers({
//   contacts: contactsReducer,
// });

// function saveToLocalStorage(state) {
//   try {
//     const serialisedState = JSON.stringify(state);
//     localStorage.setItem('persistantState', serialisedState);
//   } catch (e) {
//     console.warn(e);
//   }
// }

// function loadFromLocalStorage() {
//   try {
//     const serialisedState = localStorage.getItem('persistantState');
//     if (serialisedState === null) return undefined;
//     console.log(serialisedState);
//     return JSON.parse(serialisedState);
//   } catch (e) {
//     console.warn(e);
//     return undefined;
//   }
// }

// const store = createStore(rootReducer, {
//   contacts: {
//     items: loadFromLocalStorage(),
//     // filter: '',
//   },
// });

// store.subscribe(() => saveToLocalStorage(store.getState().contacts.items));
// console.log(store.getState());

// export default store;
