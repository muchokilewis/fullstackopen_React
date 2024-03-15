import { useEffect, useState } from "react";
import { v4 as uuidv4 } from 'uuid';
import axios from "axios";
import Phonebook from "./components/Phonebook";
import phoneService from "./services/phonebook"

const App = () => {
  //stores inputs
  const [persons, setPersons] = useState([])
  // handles new inputs(meant for controlling the form input element)
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [searchName, setSearchName] = useState('')

  useEffect(() => {
    // console.log('effect')
    phoneService
      .getAll()
      .then(initialContacts => setPersons(initialContacts))   

  }, [])

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

    phoneService
      .create(noteObject)
      .then(newList => {
        setPersons(persons.concat(newList))
        setNewName('')
        setNewNumber('')
      })

    // axios
    // .post('http://localhost:3001/persons', noteObject)
    // .then(response => {
    //   setPersons(persons.concat(noteObject))
    //   setNewName('')
    //   setNewNumber('')
    // })
       
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

  // const deleteContact = (person) => {
  //   console.log('Delete?')
  // }

  // const deleteContact = () => console.log('delete')

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