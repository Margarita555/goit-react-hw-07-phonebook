import { useSelector, useDispatch } from 'react-redux';
import * as contactsActions from '../../redux/contacts-actions';
import { getContacts, getFilter } from '../../redux/contacts-selectors';
import { nanoid } from 'nanoid';
import s from './ContactList.module.css';

const ContactList = () => {
  const contacts = useSelector(getContacts);
  const filter = useSelector(getFilter);
  const dispatch = useDispatch();

  const getVisibleContacts = () => {
    const normalizedFilter = filter.toLowerCase();
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter),
    );
  };

  const visibleContacts = getVisibleContacts();
  return (
    <ul>
      {visibleContacts.map(({ number, name }) => (
        <li key={nanoid()} className={s.item}>
          <span className={s.name}>{name}</span>:
          <span className={s.number}>{number}</span>
          <button
            className={s.btn}
            onClick={() => dispatch(contactsActions.deleteContact(name))}
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

// import { connect } from 'react-redux';
// const ContactList = ({ contacts, filter, onDeleteBtn }) => {

//   return (onClick={() => onDeleteBtn(name)});};

// const getVisibleContacts = (contacts, filter) => {
//   const normalizedFilter = filter.toLowerCase();
//   return contacts.filter(contact =>
//     contact.name.toLowerCase().includes(normalizedFilter),
//   );
// };

// const mapStateToProps = ({ contacts: { items, filter } }) => ({
//   contacts: getVisibleContacts(items, filter),
// });

// const mapDispatchToProps = dispatch => ({
//   onDeleteBtn: name => dispatch(contactsActions.deleteContact(name)),
// });

// export default connect(mapStateToProps, mapDispatchToProps)(ContactList);
