import { useState } from 'react'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas',
      number: '213-321-6435'
     }
  ]) 
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')

    /* The handleChange() function to set a new state for input */
    const handleNameChange = (e) => {
      setNewName(e.target.value);
    }

    const handleNumberChange = (e) => {
      setNewNumber(e.target.value);
    }

    const handleSubmit = (e) => {
      e.preventDefault();
      const foundItem = persons.find(person => person.name === newName)
      if (foundItem) {
        return alert(`${newName} already exists`)
      }
      setPersons(persons.concat({name: newName, number: newNumber}))
    }

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={handleSubmit}>
        <div>
          name: <input value={newName} onChange={handleNameChange}/>
          number: <input value={newNumber} onChange={handleNumberChange}/>
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <ul>
      {persons.map(person => <li>{person.name} {person.number}</li> )}
      </ul>
    </div>
  )
}

export default App