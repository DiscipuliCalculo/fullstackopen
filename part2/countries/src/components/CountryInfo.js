import { useState, useEffect } from "react"

const CountryInfo = ({countries}) => {
  const [selection, setSelection] = useState()

  function setInfo(id) {
    setSelection(countries[id])
  }

  function showInfo(id) {
    setInfo(id)

  }

  if (countries.length ===  1) {
    return (
      <div>
        <h2>{countries[0].name.common}</h2>
        <p>capital: {countries[0].capital[0]}</p>
        <p>area: {countries[0].area}</p>
        <h3>languages:</h3>
        <ul>
          {Object.entries(countries[0].languages).map((language, index) => <li key={index}>{Object.values(language)[1]}</li>)}
        </ul>
        <img src={countries[0].flags.png} alt="flag of the country"/>
      </div>
    )
  }

  else if (selection !== undefined) {
    return (
      <div>
        <button onClick={() => setSelection()}>Back</button>
        <h2>{selection.name.common}</h2>
        <p>capital: {selection.capital[0]}</p>
        <p>area: {selection.area}</p>
        <h3>languages:</h3>
        <ul>
          {Object.entries(selection.languages).map((language, index) => <li key={index}>{Object.values(language)[1]}</li>)}
        </ul>
        <img src={selection.flags.png} alt="flag of the country"/>
      </div>
    )
  }

  else if (countries.length > 1 && countries.length < 10) {
    return (
      <ul>
        {countries.map((country, index) => <div key={index} listid={index}>{country.name.common} <button onClick={() => showInfo(index)}>Show</button></div> )}
      </ul>
    )
  }

  else {
    return (
      <p>Make your search more specific </p>
    )
  }
}

export default CountryInfo