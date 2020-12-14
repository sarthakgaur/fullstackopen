import React from 'react';
import Person from './Person';

const Persons = ({ persons, filter }) => {
  const displayPersons = () => {
    return persons.filter(person => person.name.toLowerCase().includes(filter))
      .map(person => <Person key={person.name} name={person.name} number={person.number} />);
  };

  return (
    <div>
      {displayPersons()}
    </div>
  );
};

export default Persons;
