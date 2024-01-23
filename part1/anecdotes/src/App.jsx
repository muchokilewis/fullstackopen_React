import {useState} from 'react'

const App = () => {
    const anecdotes = [
        'If it hurts, do it more often',
        'Adding manpower to a late software oroject makes it later',
        'The first 90 % of the code accounts for the first 90 % of the development time...The remaining 10 percent of the code accounts for the other 90 % of the development time.',
        'Any fool can write code tha a computer can understand. Good programmers write code that humans can understand',
        'Premature optimization is the root of all evil',
        'Debugging is twice as hard as writing the code in the first place. Therefore, if you write code as cleverly as possible, you are, by definition, not smart enough to debug it.',
        'Programming without an exremely heavy use of console.log is the same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients',
        'The only way to go fast, is to go well.'
    ]

    const [selected, setSelected] = useState(0)
    // console.log(anecdotes.length)
    const [points, setPoints] = useState(Array(anecdotes.length).fill(0))
    const [mostVoted, setMostVoted] = useState(0)

    const handleVote = () => {
      const newPoints = [...points]
      newPoints[selected] += 1;
      setPoints(newPoints);
      console.log(newPoints)

      if (newPoints[selected] > newPoints[mostVoted]) {
        setMostVoted(selected)
      }
     
    }
    console.log(points)
    const nextAnecdote = () => {
      // by multiplying 'Math.random()' by the length of the anecdotes array and flooring the result, you guarantee that the generated index is within the valid range of the array indices (0 to 'anecdotes.length')
      const randomIndex = Math.floor(Math.random() * anecdotes.length)
      setSelected(randomIndex)
    }
    
    const maxVotes = () => {

    }
  
    


    return (
        <div>
          <h2>Anecdote of the day</h2>
          {anecdotes[selected]}
          <br />
          <p>has {points[selected]} votes</p>
          <button onClick={handleVote}>vote</button>
          <button onClick={nextAnecdote}>next anecdote</button>
          <h2>Anecdote with the most votes</h2>
          {anecdotes[mostVoted]}
          <p>has {points[mostVoted]}</p>
        </div>
    )
}

export default App