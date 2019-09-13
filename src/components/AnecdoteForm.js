import React from 'react'
import { connect } from 'react-redux'
import { newAnecdote } from '../reducers/anecdoteReducer'
import { showNotification } from '../reducers/notificationReducer'
import anecdoteService from '../services/anecdotes'

const AnecdoteForm = (props) => {

	const createAnecdote = async(event) => {
		event.preventDefault()

		const contentValue = event.target.content.value
		event.target.content.value = ''

		const anecdote = await anecdoteService.createNew(contentValue)

		props.newAnecdote(anecdote)
		props.showNotification('Created anecdote: '+ anecdote.content)
	}

	return (<div>
		<h2>create new</h2>
		<form onSubmit={createAnecdote}>
			<div><input name='content'></input></div>
			<button type='submit'>create</button>
		</form>
	</div>)
}

const mapDispatchToProps = {
	newAnecdote,
	showNotification
}

export default connect(null,mapDispatchToProps)(AnecdoteForm)
