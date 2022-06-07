import { useState } from 'react'

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  let all = good + neutral + bad;
  let averageFeedback = ((good * 1) + (bad * -1))/all;
  let positiveFeedback = (good/all) * 100

  return (
    <div>
      <h1>give feedback</h1>
      <div>
        <button onClick={ ()=>setGood(good + 1) }>good</button>
        <button onClick={ ()=>setNeutral(neutral + 1) }>neutral</button>
        <button onClick={ ()=>setBad(bad + 1) }>bad</button>
      </div>
      <div>
        <h3>statistics</h3>
        <p>good {good}</p>
        <p>neutral {neutral}</p>
        <p>bad {bad}</p>
        <p>all {all}</p>
        <p>average {averageFeedback}</p>
        <p>positive {positiveFeedback}%</p>
      </div>
    </div>
  )
}

export default App