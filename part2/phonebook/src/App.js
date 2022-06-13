import { useState, useEffect } from 'react'
import Filter from './components/Filter'
import Form from './components/Form'
import Listing from './components/Listing'
import axios from 'axios'

const App = () => {
  const [persons, setPersons] = useState([])

  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [nameFilter, setNameFilter] = useState('')
  const [filteredPersons, setFilteredPersons] = useState()

  useEffect(() => {
    console.log('effect')
    axios
    .get('http://localhost:3001/persons')
    .then(response => {
      console.log('promise fulfilled')
      setPersons(response.data)
      setFilteredPersons(response.data)
    })
  }, [])


    /* The handleChange() function to set a new state for input */
    const handleNameChange = (e) => {
      setNewName(e.target.value);
    }

    const handleNumberChange = (e) => {
      setNewNumber(e.target.value);
    }

    const handleNameFilter = (e) => {
      setNameFilter(e.target.value);
      if (nameFilter !== "") {
        setFilteredPersons(findMatches(nameFilter, persons))
        return
      }
      setFilteredPersons(persons)
    }

    function findMatches(wordToMatch, persons) {
      return persons.filter(person => {
        // here we create a regular expression to match the name
        const regex = new RegExp(wordToMatch, 'gi');
        return person.name.match(regex)
      });
    }

    const handleSubmit = (e) => {
      e.preventDefault();
      const foundItem = persons.find(person => person.name === newName)
      if (foundItem) {
        return alert(`${newName} already exists`)
      }

      const newPerson = {
        name: newName,
        number: newNumber
      }

      axios
      .post('http://localhost:3001/persons', newPerson)
      .then(response => {setPersons(persons.concat(response.data))})
    }

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter nameFilter={nameFilter} handleNameFilter={handleNameFilter} />
      <Form newName={newName} newNumber={newNumber} handleNameChange={handleNameChange} handleNumberChange={handleNumberChange} handleSubmit={handleSubmit} />
      <h2>Numbers</h2>
      <ul>
      {(filteredPersons !== undefined) ? filteredPersons.map(person => <Listing person={person} /> ) :
      persons.map(person => <Listing person={person} /> ) }
      </ul>
    </div>
  )
}

export default App