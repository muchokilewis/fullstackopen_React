import React from 'react';
import axios from "axios";

const baseUrl = 'http://localhost:3001/persons'

const ContactList = ({ filteredPersons }) => {
  return (
    <ul>
      {filteredPersons.map((person, index) =>
        <li key={index}>
          {person.name} - {person.number}
          <button type='submit' onClick={() => {
            console.log('delete')
            console.log(person)
            const id = person.id
            axios
              .delete(`${baseUrl}/${id}`)
          }} >Delete</button>
        </li>
      )}
    </ul>
  );
}

export default ContactList;