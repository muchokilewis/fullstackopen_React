import { useState } from "react";
import { v4 as uuidv4 } from 'uuid';

const App = () => {
  //stores inputs
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456'},
    { name: 'Ada Lovelace', number: '39-44-5323523'},
    { name: 'Dan Abramov', number: '12-43-234345'},
    { name: 'Mary Poppendieck', number: '39-23-6423122'}
  ])
  // handles new inputs(meant for controlling the form input element)
  const [newName, setNewName] = useState('')
  const [newNunber, setNewNumber] = useState('')
  const [searchName, setSearchName] = useState('')

  const addPerson = (event) => {
    event.preventDefault()
    // if (newName.trim() === '' || newNunber.trim() === '') {
    //   window.alert('Name or number cannot be empty')
    //   return
    // }

    if (persons.some(person => person.name === newName)) {
      alert(`${newName} is already added to phonebook`)
      return
    }

    const noteObject = {
      name: newName,
      number: newNunber,
      id: uuidv4 // Generate a unique id for each person
    }
    setPersons(persons.concat(noteObject))
    setNewName('')
    setNewNumber('')
        
    console.log("button clicked", event.target)
  }

  const handleNameChange = (event) => {
    // console.log(event.target.value)
    setNewName(event.target.value)
  }

  const handleNumberChange = (event) => {
    setNewNumber(event.target.value)
  }

  const handleSearchChange = (event) => {
    setSearchName(event.target.value)
  }

  const filteredPersons = persons.filter(person => person.name.toLowerCase().includes(searchName.toLowerCase()))
  // console.log(filteredPersons)
  
  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={addPerson}>
        <div>
          filter shown with <input value={searchName} onChange={handleSearchChange} />
        </div>
        <h2>Add a new</h2>
        <div>
          name: <input value={newName} onChange={handleNameChange}/>
        </div>
        <div>
          number: <input value={newNunber} onChange={handleNumberChange}/>
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      {/* <div>debug: {newName}</div> */}
      <h2>Numbers</h2>
      <ul>
        {filteredPersons.map((person, index) =>
          <li key={index}>
            {person.name} - {person.number}
          </li>
        )}
      </ul>

    </div>
  )
 
}

export default App