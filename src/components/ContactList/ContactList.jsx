import React from 'react';
import PropTypes from 'prop-types';

import { ListItem, DeleteButton } from './ContactList.styled';

export default function ContactList({ contacts, deleteContact }) {
  return (
    <div>
      {contacts.map(item => (
        <ListItem key={item.id}>
          {item.name}: {item.number}
          <DeleteButton value={item.id} onClick={() => deleteContact(item.id)}>
            Delete
          </DeleteButton>
        </ListItem>
      ))}
    </div>
  );
}

ContactList.propTypes = {
  contacts: PropTypes.array.isRequired,
};
