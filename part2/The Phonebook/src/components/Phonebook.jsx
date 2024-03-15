import React from 'react'
import ContactList from './ContactList'
import Filter from './Filter'
import PersonForm from './PersonForm'

const Phonebook = ({ persons, setPersons, newName, setNewName, newNumber, setNewNumber, searchName, setSearchName, addPerson, filteredPersons, deleteContact }) => {
    return(
        <div>
            <h2>Phonebook</h2>
            <Filter searchName={searchName} setSearchName={setSearchName}/>
            <h3>Add a new Contact</h3>
            <PersonForm newName={newName} setNewName={setNewName} newNumber={newNumber} setNewNumber={setNewNumber} addPerson={addPerson}/>
            <h3>Numbers</h3>
            <ContactList filteredPersons={filteredPersons} deleteContact={deleteContact} />
        </div>
    )
}

export default Phonebook