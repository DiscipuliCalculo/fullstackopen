import { useState } from 'react'
import StatisticsLine from './components/StatisticsLine'

const Statistics = (props) => {
  if (props.good === 0 && props.neutral === 0 && props.bad === 0) {
    return (
      <div>
        <h3>statistics</h3>
        <p>No feedback given</p>
      </div>
    )
  }
  return (
    <div>
      <table>
        <h3>statistics</h3>
        <StatisticsLine text="good" value={props.good} />
        <StatisticsLine text="neutral" value={props.neutral} />
        <StatisticsLine text="bad" value={props.bad} />
        <StatisticsLine text="all" value={props.all} />
        <StatisticsLine text="average" value={props.average} />
        <StatisticsLine text="positive" value={props.positive} />
      </table>
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