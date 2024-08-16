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

    const noteObject = {
      name: newName,
      number: newNumber,
      id: uuidv4 // Generate a unique id for each person
    }

    const existingPerson = persons.find(person => person.name === newName)

    if (existingPerson) {
      const confirmUpdate = window.confirm(`${newName} is already added to phonebook, replace the old number with a new one?`)
      // alert(`${newName} is already added to phonebook, replace number with new one?`)
      if (confirmUpdate){
        phoneService
          .updateContact(existingPerson.id, noteObject)
          .then(updatedContact => {
            setPersons(persons.map(person => person.id !== existingPerson.id ? person : updatedContact))
            setNewName('')
            setNewNumber('')
          })
          .catch(error => {
            console.error('Error updating contact: ', error)
          })
      }

    }
    else{
      phoneService
        .create(noteObject)
        .then(newList => {
          setPersons(persons.concat(newList))
          setNewName('')
          setNewNumber('')
        })
    }

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

  const deleteContact = (id, name) => {
    const confirmDelete = window.confirm(`Are you sure you want to delete ${name}'s contact?`)
    if (confirmDelete) {

      phoneService
        .deleteContact(id, name)
        .then(newContacts  => {
          setPersons(persons.filter(person => person.id !== id))
        })
        .catch(error => {
          console.error('Error deleting contact: ', error)
        })
    }
  }

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
      deleteContact={deleteContact}
    />
  )
 
}

export default App