import React, { useState } from 'react';

const App = () => {
  let data = [
    { name: 'Arto Hellas', number: '040-123456' },
    { name: 'Ada Lovelace', number: '39-44-5323523' },
    { name: 'Dan Abramov', number: '12-43-234345' },
    { name: 'Mary Poppendieck', number: '39-23-6423122' }
  ];

  const [persons, setPersons] = useState(data);
  const [newName, setNewName] = useState('');
  const [newNumber, setNewNumber] = useState('');
  const [filter, setfilter] = useState('');

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
      setPersons(persons.concat(personObj));
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

  const displayPersons = () => {
    return persons.filter(person => person.name.toLowerCase().includes(filter))
      .map(person => <p key={person.name}>{person.name} {person.number}</p>);
  };

  return (
    <div>
      <h2>Phonebook</h2>
      <div>
        filter shown with: <input value={filter} onChange={handleFilterChange} required />
      </div>

      <h2>Add a new</h2>
      <form onSubmit={handleSubmit}>
        <div>
          name: <input value={newName} onChange={handleNameChange} required />
        </div>
        <div>
          number: <input value={newNumber} onChange={handleNumberChange} required />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>

      <h2>Numbers</h2>
      {displayPersons()}
    </div>
  );
};

export default App;
