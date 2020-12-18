import React from 'react';
import Person from './Person';

const Persons = ({ persons, filter, handleDeletion }) => {
  const displayPersons = () => {
    return persons.filter(person => person.name.toLowerCase().includes(filter))
      .map(person => <Person
        key={person.name}
        person={person}
        handleDeletion={() => { handleDeletion(person) }}
      />);
  };

  return (
    <div>
      {displayPersons()}
    </div>
  );
};

export default Persons;
