import React from 'react';
import PropTypes from 'prop-types';
import { Paragraph } from './Filter.styled';

export default function Filter({ onFilterChange, value }) {
  return (
    <div>
      <Paragraph>Find contacts by name</Paragraph>
      <input
        onChange={onFilterChange}
        value={value}
        type="text"
        name="filter"
        pattern="^[a-zA-Zа-яА-Я]+(([' \-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        required
      />
    </div>
  );
}

Filter.propTypes = {
  onFilterChange: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
};
