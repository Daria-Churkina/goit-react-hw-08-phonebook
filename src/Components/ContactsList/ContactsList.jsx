import { useSelector, useDispatch } from 'react-redux';
import { contactsOperations, contactsSelectors } from '../../Redux/contacts';
import s from '../ContactsList/ContactsList.module.css';

function ContactsList() {
  const dispatch = useDispatch();
  const showncontacts = useSelector(contactsSelectors.getShownContacts);
  const contacts = useSelector(contactsSelectors.getContacts);

  if (contacts.length) {
    return (
      <ul className={s.contactList}>
        {showncontacts.map(({ id, name, number }) => (
          <li className={s.contactItem} key={id}>
            <p className={s.data}>
              {name} : {number}
            </p>
            <button
              type="button"
              onClick={() => dispatch(contactsOperations.deleteContact(id))}
              className={s.deleteContactButton}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    );
  } else {
    return <h3>Add new contacts</h3>;
  }
}

export default ContactsList;
