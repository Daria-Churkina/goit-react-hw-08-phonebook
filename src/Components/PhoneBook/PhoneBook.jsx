import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { contactsOperations } from '../../Redux/contacts';
import s from '../PhoneBook/PhoneBook.module.css';

function PhoneBook() {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const dispatch = useDispatch();

  const handleChange = e => {
    const { name, value } = e.target;

    switch (name) {
      case 'name':
        setName(value);
        break;

      case 'number':
        setNumber(value);
        break;

      default:
        return;
    }
  };

  const submitForm = e => {
    e.preventDefault();
    dispatch(contactsOperations.addContact(name, number));
    resetState();
  };

  const resetState = () => {
    setName('');
    setNumber('');
  };

  return (
    <form onSubmit={submitForm}>
      <label className={s.label}>
        Enter name
        <input
          type="text"
          value={name}
          name="name"
          onChange={handleChange}
          placeholder="Jony Depp"
        />
      </label>
      <label className={s.label}>
        Еnter number
        <input
          type="tel"
          value={number}
          name="number"
          onChange={handleChange}
          placeholder="Number (7 to 9 digits)"
          pattern="[0-9]{7,9}"
          title="7 to 9 digits allowed"
        />
      </label>
      <button type="submit" className={s.addContact}>
        Add contact
      </button>
    </form>
  );
}

export default PhoneBook;
