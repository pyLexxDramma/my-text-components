import React from 'react';
import List from './List';

const TextComponent = ({ header, options, text }) => {
  return (
    <div className="text-component">
      <h2>{header}</h2>
      <List options={options} />
      <p>{text}</p>
    </div>
  );
};

export default TextComponent;
