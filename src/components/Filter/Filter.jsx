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
