import { useEffect, useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import contactsData from './contactsData.json';
import ContactList from './components/ContactList/ContactList';
import SearchBox from './components/SearchBox/SearchBox';
import ContactForm from './components/ContactForm/ContactForm';

function App() {
  const [searchQuery, setSearchQuery] = useState('');
  // const [contacts, setContacts] = useState(() => {
  //   const savedContacts = window.localStorage.getItem('contacts');
  //   if (savedContacts !== null) {
  //     return JSON.parse(savedContacts);
  //   }
  //   return contactsData;
  // });

  // useEffect(() => {
  //   window.localStorage.setItem('contacts', JSON.stringify(contacts));
  // }, [contacts]);

  // const deleteContact = contactId => {
  //   setContacts(prevContacts => {
  //     return prevContacts.filter(contact => contact.id !== contactId);
  //   });
  // };

  // const addContact = newContact => {
  //   setContacts(prevContacts => {
  //     return [...prevContacts, newContact];
  //   });
  // };

  // const visibleContacts = contacts.filter(contact =>
  //   contact.name.toLowerCase().includes(searchQuery.toLowerCase()),
  // );

  

  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm />
      <SearchBox />
      {/* <ContactList contacts={visibleContacts} onDelete={deleteContact} /> */}
      <ContactList />
    </div>
  );
}

export default App;
