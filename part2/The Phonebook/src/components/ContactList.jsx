import React from 'react';

const ContactList = ({ filteredPersons }) => {
  return (
    <ul>
      {filteredPersons.map((person, index) =>
        <li key={index}>
          {person.name} - {person.number}
        </li>
      )}
    </ul>
  );
}

export default ContactList;