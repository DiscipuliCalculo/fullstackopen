import backendServices from "./services"

const Listing = ({person}) => {

  const handleDelete = () => {

    if (window.confirm(`Delete ${person.name}`)) {
      backendServices.deleteName(person.id)
    }
    
  }
  

  return (
    <div>
      {person.name} {person.number}
      <button onClick={handleDelete}>Delete</button>
    </div>
  )
}

export default Listing