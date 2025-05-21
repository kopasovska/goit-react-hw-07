import css from './ContactList.module.css';
import Contact from '../Contact/Contact';
import { useSelector } from 'react-redux';

const getVisibleContacts = (contacts, filter) => {
  return contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase()),
  );
}


const ContactList = () => {
  const contacts = useSelector((state) => state.contacts.items);
  const filter = useSelector((state) => state.filters.name);
  const visibleContacts = getVisibleContacts(contacts, filter);
  

  return (
    <ul className={css.contactList}>
      {visibleContacts.map(contact => {
        return (
          <Contact
            contact={contact}
          />
        );
      })}
    </ul>
  );
};

export default ContactList;
