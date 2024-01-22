import { useState } from 'react'

const Button = (props) => {
  // console.log(props)

  return (
    <button onClick={props.handle}>{props.text} </button>

  )
}

const StatisticLine = (props) => {
  // console.log(props)

  return (
    <div>
      <p>{props.text} {props.value}</p>
    </div>
  )
}


const Statistics = (props) =>{
  // console.log(props)
  
  if (props.allClicks === 0) {

    return (
      <div>
        <p>No feedback given</p>
      </div>
    )
  }

  return (
    <div>
      <StatisticLine text="good" value={props.good}/>
      <StatisticLine text="neutral" value={props.neutral} />
      <StatisticLine text="bad" value={props.bad} />
      <StatisticLine text="average" value={props.average} />
      <StatisticLine text="positive" value={props.positive} />
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
      <Button text='good'  handle={handleGood}/>
      <Button text='bad' handle={handleBad} />
      <Button text='neutral' handle={handleNeutral} />
      <h1>Statistics</h1>
      <Statistics good={good} neutral={neutral} bad= {bad} average={average} positive={positive} allClicks={allClicks}/>
    </div>
  )

}

export default App