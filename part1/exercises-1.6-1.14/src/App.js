import { useState } from 'react'

const Statistics = (props) => {
  return (
    <div>
    <h3>statistics</h3>
    <p>good {props.good}</p>
    <p>neutral {props.neutral}</p>
    <p>bad {props.bad}</p>
    <p>all {props.all}</p>
    <p>average {props.average}</p>
    <p>positive {props.positive}%</p>
  </div>
  )
}

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
      <Statistics good={good} neutral={neutral} bad={bad} all={all} average={averageFeedback} positive={positiveFeedback} />
    </div>
  )
}

export default App