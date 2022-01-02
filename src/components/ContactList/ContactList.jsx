import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import * as contactsOperations from '../../redux/contacts-operations';
import {
  getContacts,
  getFilter,
  getLoading,
  getError,
} from '../../redux/contacts-selectors';
import Spinner from '../Spinner/Spinner';
import { nanoid } from 'nanoid';
import s from './ContactList.module.css';

const ContactList = () => {
  const contacts = useSelector(getContacts);
  const filter = useSelector(getFilter);
  const loading = useSelector(getLoading);
  const error = useSelector(getError);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(contactsOperations.fetchContacts());
    // dispatch(contactsOperations.deleteContact());
  }, [dispatch]);

  const getVisibleContacts = () => {
    const normalizedFilter = filter.toLowerCase();
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter),
    );
  };

  const visibleContacts = getVisibleContacts();
  return (
    <>
      {loading && <Spinner />}
      {error && <h2>Oops, something went wrong. Try again later</h2>}
      {contacts.length > 0 && (
        <ul>
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
      )}
    </>
  );
};

export default ContactList;
