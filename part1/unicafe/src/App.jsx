import { useState } from 'react'

const Statistics = (props) =>{

  if (props.allClicks === 0) {

    return (
      <div>
        <h1>Statistics</h1>
        <p>No feedback given</p>
      </div>
    )
  }

  return (
    <div>
      <h1>Statistics</h1>
      <p>good {props.good}</p>
      <p>neutral {props.neutral}</p>
      <p>bad {props.bad}</p>
      <p>all {props.all}</p>
      <p>Average {props.average}</p>
      <p>positive {props.positive} %</p>
    </div>

  )

}

const App = () => {
  //save click of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [allClicks, setAll] = useState(0)
  const all = (bad+good+neutral)
  const average = ((good-bad)/all)
  const positive = ((good/all)*100)

  const handleGood = () => {
    setGood(good + 1)
    setAll(allClicks+1)
  }
  const handleBad = () => {
    setBad(bad+1)
    setAll(allClicks+1)
  }
  const handleNeutral = () => {
    setNeutral(neutral+1)
    setAll(allClicks+1)
  }

  return (
    <div>
      <h1>give feedback</h1>
      <button onClick={handleGood}>Good </button>
      <button onClick={handleBad}>neutral</button>
      <button onClick={handleNeutral}>bad</button>

      <Statistics good={good} neutral={neutral} bad= {bad} average={average} positive={positive} allClicks={allClicks}/>
    </div>
  )

}

export default App