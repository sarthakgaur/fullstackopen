import React from 'react';

const Person = ({ person, handleDeletion }) => {
  return (
    <div>
      <span>{person.name} {person.number}</span>
      <button onClick={handleDeletion}>Delete</button>
    </div>
  );
};

export default Person;
