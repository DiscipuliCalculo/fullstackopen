import axios from "axios"
import { useState, useEffect } from "react"
import CountryCard from "./components/CountryCard"

const App = () => {

  const [countrySearch, setCountrySearch] = useState('')
  const [filteredCountries, setFilteredCountries] = useState([])
  const [countries, setCountries] = useState([])

  useEffect(() => {
    console.log('effect')
    axios
      .get('https://restcountries.com/v3.1/all')
      .then(response => {
        console.log('promise fulfilled')
        setCountries(response.data)
    })
  }, [])

  /* The handleChange() function to set a new state for input */
  const handleChange = (e) => {
    setCountrySearch(e.target.value);
    if (countrySearch !== "") {
      setFilteredCountries(findMatches(countrySearch, countries))
      return
    }
    setFilteredCountries([])
  }

  function findMatches(wordToMatch, countries) {
    return countries.filter(country => {
      // here we create a regular expression to match the name
      const regex = new RegExp(wordToMatch, 'gi');
      return country.name.common.match(regex)
    });
  }

  const logCountries = () => {
    console.log(filteredCountries)
  }

  
  return (
    <div>
      <input type="text" onChange={handleChange}/>
      <button onClick={logCountries}>Log Countries</button>
      {filteredCountries.length > 10 ? <p>Make your search more specific </p> :
            <ul>
            {filteredCountries.map(country => <li>{country.name.common}</li> )}
          </ul>
      }

    </div>
  )
}

export default App