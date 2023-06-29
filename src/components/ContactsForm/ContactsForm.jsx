import React, { useState } from 'react';
import { nanoid } from 'nanoid';
import css from './ContactsForm.module.css';

const NameInputId = nanoid();

export const ContactsForm = ({ onSubmit }) => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === 'name') {
      setName(value);
    } else if (name === 'number') {
      setNumber(value);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(name, number);
    setName('');
    setNumber('');
  };

  return (
    <form className={css.contactsForm} onSubmit={handleSubmit}>
      <label className={css.label} htmlFor={NameInputId}>
        Name
      </label>
      <input
        type="text"
        name="name"
        placeholder="Enter name"
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        required
        value={name}
        onChange={handleChange}
      />
      <label className={css.label} htmlFor={NameInputId}>
        Number
      </label>
      <input
        type="tel"
        name="number"
        placeholder="Enter phone number"
        pattern="[0-9]{3}-[0-9]{2}-[0-9]{2}"
        title="Phone number must be 11 digits and can contain numbers, spaces, dashes, pot-bellied brackets and can start with +"
        required
        value={number}
        onChange={handleChange}
      />
      <button className={css.button} type="submit">
        Add contact
      </button>
    </form>
  );
};