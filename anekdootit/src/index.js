import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Button = ({ text, handleClick }) => {
    return (
        <button onClick={handleClick}>{text}</button>
    )
}
const Header = ({ title }) => (<h1>{title}</h1>)

const Anecdote = ({ anecdote, count }) => {
    return (
        <p>{anecdote} <br />
            has {count} votes
        </p>
    )
}


const App = (props) => {
    const [selected, setSelected] = useState(Math.floor((Math.random() * props.anecdotes.length)))
    const [votes, setVote] = useState(Array(props.anecdotes.length).fill(0))
    const handleNextClick = () => {
        const number = Math.floor((Math.random() * props.anecdotes.length))
        return setSelected(number)
    }

    const handleVoteClick = () => {
        const newVotes = [...votes]
        if (votes[selected]) {
            newVotes[selected] = votes[selected] + 1
        } else {
            newVotes[selected] = 1
        }
        return setVote(newVotes)
    }
    const mostVotedAnecdoteIndex = () => {
        let max = 0
        let mostIndex = 0
        for (let index = 0; index < votes.length; index++) {
            const element = votes[index];
            if (max < element) {
                max = element
                mostIndex = index
            }
        }
        return mostIndex
    }
    const index = mostVotedAnecdoteIndex()
    return (
        <div>
            <Header title='Anecdote of the day' />
            <Anecdote anecdote={props.anecdotes[selected]} count={votes[selected]} />
            <Button text='next anecdote' handleClick={handleNextClick} />
            <Button text='vote' handleClick={handleVoteClick} />
            <Header title='Anecdote with most votes' />
            <Anecdote anecdote={props.anecdotes[index]}
                count={votes[index]} />
        </div>
    )
}

const anecdotes = [
    'If it hurts, do it more often',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]

ReactDOM.render(
    <App anecdotes={anecdotes} />,
    document.getElementById('root')
)