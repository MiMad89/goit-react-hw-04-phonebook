import React from 'react';
import css from './ContactsList.module.css';

export const ContactsList = ({ contacts, onClick }) => {
  const handleDelete = (e) => {
    const { value } = e.target;
    onClick(value);
  };

  return (
    <ul className={css.contactsList}>
      {contacts.map((contact) => {
        return (
          <li key={contact.id} className={css.contactsListItem}>
            <p>
              {contact.name}: {contact.number}
            </p>
            <button
              className={css.button}
              type="button"
              onClick={handleDelete}
              value={contact.id}
            >
              Delete
            </button>
          </li>
        );
      })}
    </ul>
  );
};

export default ContactsList;
