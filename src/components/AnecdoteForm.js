import React from 'react'
import { newAnecdote } from '../reducers/anecdoteReducer'

const AnecdoteForm = ({ store }) => {

	const createAnecdote = (event) => {
		event.preventDefault()
		store.dispatch(newAnecdote(event.target.content.value))
	}

	return (<div>
		<h2>create new</h2>
		<form onSubmit={createAnecdote}>
			<div><input name='content'/></div>
			<button>create</button>
		</form>
	</div>)
}

export default AnecdoteForm
