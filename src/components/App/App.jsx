import React, { useState, useEffect } from 'react';

import ContactForm from '../ContactForm/ContactForm';
import ContactList from '../ContactList/ContactList';
import Filter from '../Filter/Filter';

import { MainWrap } from './App.styled';

const initialState = [
  { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
  { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
  { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
  { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
];

export default function App() {
  const lStorage = localStorage.getItem('contacts');

  const [contacts, setContacts] = useState(() => {
    return JSON.parse(lStorage) || initialState;
  });
  const [filter, setFilter] = useState('');

  useEffect(() => {
    if (contacts.length === 0) {
      localStorage.removeItem('contacts');
    } else {
      localStorage.setItem('contacts', JSON.stringify(contacts));
    }
  }, [contacts, lStorage]);

  const addNewContact = newContact => {
    if (
      contacts.find(contact => {
        return contact.name.toLowerCase() === newContact.name.toLowerCase();
      })
    ) {
      alert(newContact.name + ' is already in contacts.');
      return;
    }
    setContacts(prevState => [newContact, ...prevState]);
  };
  const contactsFilter = () => {
    const normalizeFilter = filter.toLowerCase();
    return contacts.filter(({ name, number }) => {
      return (
        name.trim().toLowerCase().includes(normalizeFilter) ||
        number.trim().toLowerCase().includes(normalizeFilter)
      );
    });
  };

  const deleteContact = id => {
    setContacts(() => {
      return contacts.filter(contact => contact.id !== id);
    });
  };

  const handleFilterChange = e => {
    setFilter(e.target.value);
  };
  return (
    <MainWrap>
      <h1>Phonebook-HW4</h1>
      <ContactForm addNewContact={addNewContact} props={contacts} />
      <h2>Contacts</h2>
      <Filter onFilterChange={handleFilterChange} value={filter} />
      <ContactList contacts={contactsFilter()} deleteContact={deleteContact} />
    </MainWrap>
  );
}
