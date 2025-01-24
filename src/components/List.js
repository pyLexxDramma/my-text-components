// src/components/List.js
import React from 'react';

const List = ({ options }) => {
  return (
    <ul>
      {options.map((option, index) => (
        <li key={index}>{option}</li>
      ))}
    </ul>
  );
};

export default List;
