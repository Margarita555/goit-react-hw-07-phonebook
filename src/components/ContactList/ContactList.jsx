import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import * as contactsOperations from '../../redux/contacts-operations';
import {
  getContacts,
  getFilter,
  getLoading,
} from '../../redux/contacts-selectors';
import { nanoid } from 'nanoid';
import s from './ContactList.module.css';

const ContactList = () => {
  const contacts = useSelector(getContacts);
  const filter = useSelector(getFilter);
  const loading = useSelector(getLoading);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(contactsOperations.fetchContacts());
  });

  const getVisibleContacts = () => {
    const normalizedFilter = filter.toLowerCase();
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter),
    );
  };

  const visibleContacts = getVisibleContacts();
  return (
    <ul>
      {/* {loading && <h2>Loading</h2>} */}
      {visibleContacts.map(({ phone, name, id }) => (
        <li key={nanoid()} className={s.item}>
          <span className={s.name}>{name}</span>:
          <span className={s.number}>{phone}</span>
          <button
            className={s.btn}
            onClick={() => dispatch(contactsOperations.deleteContact(id))}
            type="button"
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
};

export default ContactList;
