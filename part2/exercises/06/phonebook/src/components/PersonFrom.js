import React from 'react';

const PersonFrom = (props) => {
  const { 
    handleSubmit,
    newName,
    handleNameChange,
    newNumber,
    handleNumberChange
  } = props;

  return (
    <form onSubmit={handleSubmit}>
      <div>
        Name: <input value={newName} onChange={handleNameChange} required />
      </div>
      <div>
        Number: <input value={newNumber} onChange={handleNumberChange} required />
      </div>
      <div>
        <button type="submit">Add</button>
      </div>
    </form>
  );
};

export default PersonFrom;
