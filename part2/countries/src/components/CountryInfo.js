import { useState, useEffect } from "react"
import axios from "axios"

const CountryInfo = ({countries}) => {
  const [selection, setSelection] = useState()
  const [selectionWeather, setSelectionWeather] = useState()

  function setInfo(id) {
    setSelection(countries[id])
  }



  if (countries.length ===  1) {
    axios
    .get(`https://api.openweathermap.org/data/2.5/weather?lat=${countries[0].capitalInfo.latlng[0]}&lon=${countries[0].capitalInfo.latlng[1]}&appid=${'244a56f1f2fa03aa4208be6ce510e2ca'}&units=metric`)
    .then(response => {
      console.log('promise fulfilled')
      setSelectionWeather(response.data)
      console.log(selectionWeather)
  })
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
        <h3>Weather in {countries[0].capital[0]}</h3>
        <p>temperature: {selectionWeather.main.temp}</p>
        <p>wind: {selectionWeather.wind.speed}</p>
      </div>
    )
  }

  else if (selection !== undefined) {
    axios
    .get(`https://api.openweathermap.org/data/2.5/weather?lat=${selection.capitalInfo.latlng[0]}&lon=${selection.capitalInfo.latlng[1]}&appid=${'244a56f1f2fa03aa4208be6ce510e2ca'}&units=metric`)
    .then(response => {
      console.log('promise fulfilled')
      setSelectionWeather(response.data)
      console.log(selectionWeather)
  })
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
        <h3>Weather in {selection.capital[0]}</h3>
        <p>temperature: {selectionWeather.main.temp}</p>
        <p>wind: {selectionWeather.wind.speed}</p>
      </div>
    )
  }

  else if (countries.length > 1 && countries.length < 10) {
    return (
      <ul>
        {countries.map((country, index) => <div key={index} listid={index}>{country.name.common} <button onClick={() => setInfo(index)}>Show</button></div> )}
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