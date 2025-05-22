import css from './ContactList.module.css';
import Contact from '../Contact/Contact';
import { useSelector } from 'react-redux';
import toast from 'react-hot-toast';

const getVisibleContacts = (contacts, filter) => {
  return contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase()),
  );
}


const ContactList = () => {
  const contacts = useSelector((state) => state.contacts.items);
  const filter = useSelector((state) => state.filters.name);
  const visibleContacts = getVisibleContacts(contacts, filter);
  const error = useSelector((state) => state.contacts.error);
  const isLoading = useSelector((state) => state.isLoading);

  return (
    <div>
      <ul className={css.contactList}>
        {visibleContacts.map(contact => {
          return (
            <Contact key={contact.id}
              contact={contact}
            />
          );
        })}
      </ul>
      {isLoading && <h2>Contacts are loading...</h2>}
      {error && toast.error('Sorry, something went wrong! Try again later!')}
    </div>
  );
};

export default ContactList;
