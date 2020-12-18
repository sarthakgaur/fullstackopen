import React, { useState, useEffect } from 'react';
import Filter from './components/Filter';
import PersonFrom from './components/PersonFrom';
import Persons from './components/Persons';
import personService from './services/persons';

const App = () => {
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState('');
  const [newNumber, setNewNumber] = useState('');
  const [filter, setfilter] = useState('');

  useEffect(() => {
    personService
      .getAll()
      .then(initialPersons => { setPersons(initialPersons) });
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();
    const personObj = {
      name: newName,
      number: newNumber,
    };

    // Enter name only if it doesn't already exist

    if (persons.find(person => person.name === newName)) {
      alert(`${newName} is already added to phonebook`);
    } else {
      personService
        .create(personObj)
        .then(returnedPerson => {
          setPersons(persons.concat(returnedPerson));
        });
    }
    setNewName('');
    setNewNumber('');
  };

  const handleFilterChange = (event) => {
    setfilter(event.target.value.toLowerCase());
  };

  const handleNameChange = (event) => {
    setNewName(event.target.value);
  };

  const handleNumberChange = (event) => {
    setNewNumber(event.target.value);
  };

  const handleDeletion = (personToRemove) => {
    if (window.confirm(`Delete ${personToRemove.name}?`)) {
      personService
        .remove(personToRemove.id)
        .then(() => {
          setPersons(persons.filter(person => person.id !== personToRemove.id));
        });
    }
  };

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter filter={filter} handleFilterChange={handleFilterChange} />

      <h2>Add a new</h2>
      <PersonFrom
        handleSubmit={handleSubmit}
        newName={newName}
        handleNameChange={handleNameChange}
        newNumber={newNumber}
        handleNumberChange={handleNumberChange}
      />

      <h2>Numbers</h2>
      <Persons filter={filter} persons={persons} handleDeletion={handleDeletion} />
    </div>
  );
};

export default App;
