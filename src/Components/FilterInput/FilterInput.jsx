import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { contactsActions, contactsSelectors } from '../../Redux/contacts';
import s from '../FilterInput/FilterInput.module.css';

function FilterInput() {
  const dispatch = useDispatch();
  const filter = useSelector(contactsSelectors.getFilter);
  const contacts = useSelector(contactsSelectors.getContacts);

  const filterInput = e => {
    dispatch(contactsActions.filterContact(e.target.value));
  };

  return (
    <>
      {contacts.length > 0 && (
        <label className={s.label}>
          Enter any letter
          <input
            className={s.input}
            type="text"
            value={filter}
            name="filter"
            onChange={filterInput}
            placeholder="Find your contact"
          />
        </label>
      )}
    </>
  );
}

export default FilterInput;
