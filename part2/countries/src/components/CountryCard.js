const CountryCard = ({country}) => {

  return (
    <li>
      <h3>{country.name.common}</h3>
    </li>
  )
}

export default CountryCard