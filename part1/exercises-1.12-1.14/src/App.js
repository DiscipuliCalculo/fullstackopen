import { useState } from 'react'

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients'
  ]

  const initialVotes = [0, 0, 0, 0, 0, 0, 0]

  function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }
  
  const [votes, setVotes] = useState(initialVotes)
  const [selected, setSelected] = useState(0)
  const [highestVoted, setHighest] = useState(selected)

  const updateHighest = () =>  {
    if (votes[selected] >= votes[highestVoted]) {
      setHighest(selected)
    }
  }

  const updateVotes = () => {
    const newVotes = votes.map((vote, index) => {
      if (index === selected) {
        return vote += 1;
      }
      return vote;
    });
    updateHighest();
    setVotes(newVotes);
  }

  return (
    <div>
      {anecdotes[selected]}
      <p>has {votes[selected]} votes</p>
      <div>
        <button onClick={updateVotes}>Vote</button>
        <button onClick={() => setSelected(getRandomInt(anecdotes.length))}>Change Anecdote</button>
      </div>
      {anecdotes[highestVoted]}
      <p>has {votes[highestVoted]} votes</p>
    </div>
  )
}

export default App
