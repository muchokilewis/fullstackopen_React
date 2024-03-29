import React from 'react';

const PersonForm = ({ newName, setNewName, newNumber, setNewNumber, addPerson }) => {
  return (
    <form onSubmit={addPerson}>
      <div>
        name: <input value={newName} onChange={setNewName} />
      </div>
      <div>
        number: <input value={newNumber} onChange={setNewNumber} />
      </div>
      <div>
        <button type="submit">add</button>
      </div>
    </form>
  );
}

export default PersonForm;