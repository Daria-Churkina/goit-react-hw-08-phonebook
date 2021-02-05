import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import Container from '../../Components/Container/Container';
import ContactsList from '../../Components/ContactsList/ContactsList';
import PhoneBook from '../../Components/PhoneBook/PhoneBook';
import FilterInput from '../../Components/FilterInput/FilterInput';
import { contactsOperations } from '../../Redux/contacts';
import s from '../ContactsView/ContactsView.module.css';

export default function ContactsView() {
  const dispatch = useDispatch();

  useEffect(() => dispatch(contactsOperations.fetchContacts()), [dispatch]);

  return (
    <Container>
      <div className={s.phonebook}>
        <h1 className={s.title}>PhoneBook</h1>
        <PhoneBook />
      </div>
      <div className={s.contacts}>
        <h2 className={s.title}>Contacts</h2>
        <FilterInput />
        <ContactsList />
      </div>
    </Container>
  );
}
