
const CountryInfo = ({countries}) => {

  if (countries.length ===  1) {
    return (
      <div>
        <h2>{countries[0].name.common}</h2>
        <p>capital: {countries[0].capital[0]}</p>
        <p>area: {countries[0].area}</p>
        <h3>languages:</h3>
        <ul>
          {Object.entries(countries[0].languages).map((language) => <li>{Object.values(language)[1]}</li>)}
        </ul>
        <img src={countries[0].flags.png} alt="flag of the country"/>
      </div>
    )
  }

  else if (countries.length > 1 && countries.length < 10) {
    return (
      <ul>
        {countries.map(country => <li>{country.name.common}</li> )}
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