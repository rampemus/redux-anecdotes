import React from 'react'
import { newAnecdote } from '../reducers/anecdoteReducer'
import { showNotification } from '../reducers/notificationReducer'

const AnecdoteForm = ({ store }) => {

	const createAnecdote = (event) => {
		event.preventDefault()
		const content = event.target.content.value
		store.dispatch(newAnecdote(content))
		store.dispatch(showNotification('Created anecdote: '+ event.target.content.value))
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
