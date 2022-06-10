const Filter = ({nameFilter, handleNameFilter}) => {

  return (
  <div>
    filter shown with <input value={nameFilter} onChange={handleNameFilter} />
  </div>
  )
}

export default Filter