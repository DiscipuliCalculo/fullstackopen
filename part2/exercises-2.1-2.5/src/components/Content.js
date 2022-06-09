import Part from "./Part"

const Content = ({parts}) => {
  const totalExercises = parts.reduce((total, part) => {
    return total + part.exercises
  }, 0)

  return (
    <div>
      {parts.map(part => <Part name={part.name} exercises={part.exercises}/>)}
      <h3>total of {totalExercises} exercises</h3>
    </div>
  )
}

export default Content