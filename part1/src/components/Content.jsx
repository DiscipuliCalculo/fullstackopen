const Content = (props) => {

  return (
    <div>
      <h3>{props.parts[0]}</h3>
      <p>{props.exercises[0]} exercises</p>
      <br></br>
      <h3>{props.parts[1]}</h3>
      <p>{props.exercises[1]} exercises</p>
      <br></br>
      <h3>{props.parts[2]}</h3>
      <p>{props.exercises[2]} exercises</p>
    </div>
  )
}

export default Content