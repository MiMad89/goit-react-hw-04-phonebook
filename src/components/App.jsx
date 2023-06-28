import React, { useState, useEffect } from 'react';
import { ContactsForm } from './ContactsForm';
import { ContactsList } from './ContactsList';
import { Filter } from './Filter';
import css from './App.css';
import { nanoid } from 'nanoid';

export const App = () => {
  const [isMounted, setIsMounted] = useState(false);
  const [contacts, setContacts] = useState([]);
  const [filter, setFilter] = useState('');

  useEffect(() => {
    setIsMounted(true);
    const savedContacts = localStorage.getItem('contacts');

    if (!savedContacts) return;

    const parsedContacts = JSON.parse(savedContacts);
    setContacts(parsedContacts);
  }, []);

  useEffect(() => {
    if (!isMounted) return;

    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts, isMounted]);

  const addContacts = (name, number) => {
    const contactNames = contacts.map(contact => contact.name);
    if (contactNames.includes(name)) {
      alert(`${name} is already in contacts`);
      return;
    }

    const newContact = { id: nanoid(), name, number };
    setContacts(prevContacts => [...prevContacts, newContact]);
  };

  const showFilteredContacts = () => {
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  };

  const handleFilter = e => setFilter(e);

  const deleteContact = id => {
    setContacts(prevContacts =>
      prevContacts.filter(contact => contact.id !== id)
    );
  };

  return (
    <div className={css.container}>
      <h1>Phonebook</h1>
      <ContactsForm onSubmit={addContacts} />
      <h2>Contacts</h2>
      <Filter onChange={handleFilter} />
      <ContactsList contacts={showFilteredContacts()} onClick={deleteContact} />
    </div>
  );
};
