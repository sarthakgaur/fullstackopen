import React, { useState, useEffect } from 'react';
import Filter from './components/Filter';
import PersonFrom from './components/PersonFrom';
import Persons from './components/Persons';
import Notification from './components/Notification';
import personService from './services/persons';
import './index.css';

const App = () => {
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState('');
  const [newNumber, setNewNumber] = useState('');
  const [filter, setfilter] = useState('');
  const [notification, setNotification] = useState(null);

  useEffect(() => {
    personService
      .getAll()
      .then(initialPersons => { setPersons(initialPersons) });
  }, []);

  const displayNotification = (message, isFailure) => {
    setNotification({ message, isFailure });
    setTimeout(() => { setNotification(null); }, 5000);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    let person = {
      name: newName,
      number: newNumber,
    };

    // If the name exists perform an update after asking for confirmation

    let message = "is already added to phonebook, replace the old number with a new one?";
    let previousRecord = persons.find(person => person.name === newName);

    if (previousRecord) {
      if (window.confirm(`${person.name} ${message}`)) {
        person = { ...previousRecord, ...person };
        personService
          .update(person.id, person)
          .then(returnedPerson => {
            setPersons(persons.map(person =>
              person.id === previousRecord.id ? returnedPerson : person
            ));
            displayNotification(`Updated ${returnedPerson.name}`, false);
          })
          .catch(error => {
            message = `Information of ${person.name} has already been removed from server`;
            displayNotification(message, true);
          });
      }
    } else {
      personService
        .create(person)
        .then(returnedPerson => {
          setPersons(persons.concat(returnedPerson));
          displayNotification(`Added ${returnedPerson.name}`, false);
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
      let message;
      personService
        .remove(personToRemove.id)
        .then(() => {
          setPersons(persons.filter(person => person.id !== personToRemove.id));
          displayNotification(`Deleted ${personToRemove.name}`, false);
        })
        .catch(error => {
          message = `Information of ${personToRemove.name} has already been removed from server`;
          displayNotification(message, true);
        });
    }
  };

  return (
    <div>
      <Notification notification={notification} />

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
