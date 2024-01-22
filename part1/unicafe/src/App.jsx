import { useState } from 'react'

const Statistics = (props) =>{
console.log(props)

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
  const all = (bad+good+neutral)
  console.log(all)
  const average = ((good-bad)/all)
  const positive = ((good/all)*100)

  return (
    <div>
      <h1>give feedback</h1>
      <button onClick={() => setGood(good+1)}>good</button>
      <button onClick={() =>setNeutral(neutral+1) }>neutral</button>
      <button onClick={() => setBad(bad+1)}>bad</button>
      
      <Statistics good={good} neutral={neutral} bad= {bad} average={average} positive={positive}/>
    </div>
  )

}

export default App