import React from 'react'
import { upVote } from './reducers/anecdoteReducer'
import AnecdoteForm from './components/AnecdoteForm'

const App = ({store}) => {

	const anecdotes = store.getState()

	const vote = (id) => store.dispatch(upVote(id))

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
		<AnecdoteForm store={store}/>
	</div>)
}

export default App
