import { useSelector, useDispatch } from 'react-redux';
import * as contactsActions from '../../redux/contacts-actions';
import { getFilter } from '../../redux/contacts-selectors';
import s from './Filter.module.css';

const Filter = () => {
  const filter = useSelector(getFilter);
  const dispatch = useDispatch();

  return (
    <label className={s.label}>
      Find contacts by name
      <input
        className={s.input}
        type="text"
        value={filter}
        onChange={e =>
          dispatch(contactsActions.changeFilter(e.currentTarget.value))
        }
      />
    </label>
  );
};

export default Filter;

// const mapStateToProps = state => ({
//   filter: state.contacts.filter,
// });

// const mapDispatchToProps = dispatch => ({
//   onFilterChange: e =>
//     dispatch(contactsActions.changeFilter(e.currentTarget.value)),
// });

// export default connect(mapStateToProps, mapDispatchToProps)(Filter);
