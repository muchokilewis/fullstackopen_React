import { useState } from "react";
import { v4 as uuidv4 } from 'uuid';
import Phonebook from "./components/Phonebook";

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
  const [newNumber, setNewNumber] = useState('')
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
      number: newNumber,
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
    <Phonebook
      persons={persons}
      setPersons={setPersons}
      newName={newName}
      setNewName={handleNameChange}
      newNumber={newNumber}
      setNewNumber={handleNumberChange}
      searchName={searchName}
      setSearchName={handleSearchChange}
      addPerson={addPerson}
      filteredPersons={filteredPersons}
    />
  )
 
}

export default App