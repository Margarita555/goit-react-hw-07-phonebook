// https://61cf520e65c32600170c7f3a.mockapi.io/api/v1/:endpoint
import ContactForm from '../ContactForm/ContactForm';
import ContactList from '../ContactList/ContactList';
import Filter from '../Filter/Filter';
import s from './App.module.css';
// import { connect } from 'react-redux';
// import * as contactsActions from '../../redux/contacts-actions';

function App() {
  return (
    <div className={s.app}>
      <h1>Phonebook</h1>
      <ContactForm />
      <h2>Contacts</h2>
      <Filter />
      <ContactList />
    </div>
  );
}
export default App;
// const mapStateToProps = state => ({
//   contacts: state.items,
//   filter: state.filter,
// });

// const mapDispatchToProps = dispatch => ({
// handleAddContact: (name, number) =>
//   dispatch(contactsActions.addContact(name, number)),
// handleDeleteContact: name => dispatch(contactsActions.deleteContact(name)),
// onFilterChange: e => dispatch(contactsActions.changeFilter(e)),
// });
