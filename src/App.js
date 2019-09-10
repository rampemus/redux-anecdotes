import React from 'react'
import { upVote, newAnecdote } from './reducers/anecdoteReducer'

const App = ({store}) => {

	const anecdotes = store.getState()

	const vote = (id) => store.dispatch(upVote(id))

	const createAnecdote = (event) => {
        event.preventDefault()
		store.dispatch(newAnecdote(event.target.content.value))
	}

	return (<div>
		<h2>Anecdotes</h2>
		{
			anecdotes.sort((a,b)=> b.votes - a.votes).map(anecdote => <div key={anecdote.id}>
				<div>
					{anecdote.content}
				</div>
				<div>
					has {anecdote.votes}
					<button onClick={() => vote(anecdote.id)}>vote</button>
				</div>
			</div>)
		}

		<h2>create new</h2>
		<form onSubmit={createAnecdote}>
			<div><input name='content'/></div>
			<button>create</button>
		</form>
	</div>)
}

export default App
