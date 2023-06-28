import React from 'react';

export const Filter = ({ onChange }) => {
  const handleFilter = e => {
    const { value } = e.target;
    onChange(value);
  };

  return (
    <div>
      <h3>Find contacts by name</h3>
      <input onChange={handleFilter} placeholder="Enter name" />
    </div>
  );
};