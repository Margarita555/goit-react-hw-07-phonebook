import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import * as contactsActions from '../../redux/contacts-actions';
import { getContacts } from '../../redux/contacts-selectors';
import s from './ContactForm.module.css';

export default function ContactForm() {
  const contacts = useSelector(getContacts);
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const handleChange = e => {
    const { name, value } = e.currentTarget;
    name === 'name' ? setName(value) : setNumber(value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    const isDuplicateContact = contacts.find(contact => contact.name === name);
    if (isDuplicateContact) {
      alert(`${name} is already in contacts`);
      return;
    }
    dispatch(contactsActions.addContact(name, number));
    resetState();
  };

  const resetState = () => {
    setName('');
    setNumber('');
  };

  return (
    <form className={s.contactForm} onSubmit={handleSubmit}>
      <label className={s.label}>
        Name
        <input
          className={s.input}
          type="text"
          name="name"
          value={name}
          onChange={handleChange}
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
      </label>

      <label className={s.label}>
        Number
        <input
          className={s.input}
          type="tel"
          name="number"
          value={number}
          onChange={handleChange}
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
      </label>
      <button className={s.btn} type="submit">
        Add contact
      </button>
    </form>
  );
}

// import { connect } from 'react-redux';
// function ContactForm({ contacts, onSubmit }) {

//   const handleSubmit = e => {
//     e.preventDefault();
//     const isDuplicateContact = contacts.find(contact => contact.name === name);
//     if (isDuplicateContact) {
//       alert(`${name} is already in contacts`);
//       return;
//     }
//     onSubmit(name, number);
//     resetState();
//   };

// const mapStateToProps = state => ({
//   contacts: state.contacts.items,
// });

// const mapDispatchToProps = dispatch => ({
//   onSubmit: (name, number) =>
//     dispatch(contactsActions.addContact(name, number)),
// });

// export default connect(mapStateToProps, mapDispatchToProps)(ContactForm);
