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
    let num = 0
    // console.log(anecdotes.length)

    //generating random numbers in JS   
    console.log(selected)

    return (
        <div>
            {anecdotes[selected]}
            <br />
            <br/>
            <button onClick={() => setSelected(Math.floor(Math.random(0, 7) * 10))}>next anecdote</button>
        </div>
    )
}

export default App