import { useState, useEffect } from 'react';
import ContactForm from './ContactForm';
import ContactList from './ContactList';
import SearchBox from './SearchBox';

const App = () => {
  const initialContacts = [
    { id: 'id-1', name: 'Rosie Simpson', phone: '459-12-56' },
    { id: 'id-2', name: 'Hermione Kline', phone: '443-89-12' },
    { id: 'id-3', name: 'Eden Clements', phone: '645-17-79' },
    { id: 'id-4', name: 'Annie Copeland', phone: '227-91-26' },
  ];

  const [contacts, setContacts] = useState(() => {
    const storedContacts = localStorage.getItem('contacts');
    return storedContacts ? JSON.parse(storedContacts) : initialContacts;
  });

  const [filteredContacts, setFilteredContacts] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  const handleAddContact = (newContact) => {
    setContacts([...contacts, { ...newContact, id: `id-${Date.now()}` }]);
  };

  const handleSearch = (query) => {
    setSearchTerm(query);
    const filtered = contacts.filter((contact) =>
      contact.name.toLowerCase().includes(query.toLowerCase())
    );
    setFilteredContacts(filtered);
  };

  const handleDeleteContact = (contactId) => {
    const updatedContacts = contacts.filter((contact) => contact.id !== contactId);
    setContacts(updatedContacts);
    setFilteredContacts(filteredContacts.filter((contact) => contact.id !== contactId));
  };

  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm onAddContact={handleAddContact} />
      <SearchBox value={searchTerm} onChange={handleSearch} />
      <ContactList contacts={searchTerm ? filteredContacts : contacts} onDeleteContact={handleDeleteContact} />
    </div>
  );
};

export default App;
