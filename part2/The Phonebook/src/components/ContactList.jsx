import React from 'react';


const baseUrl = 'http://localhost:3001/persons'

const ContactList = ({ filteredPersons, deleteContact }) => {
  return (
    <ul>
      {filteredPersons.map((person, index) =>
        <li key={index}>
          {person.name} - {person.number}
          <button type='submit' onClick={() => deleteContact(person.id, person.name)} >Delete</button>
        </li>
      )}
    </ul>
  );
}

export default ContactList;