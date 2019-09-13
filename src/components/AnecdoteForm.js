import React from 'react'
import { connect } from 'react-redux'
import { newAnecdote } from '../reducers/anecdoteReducer'
import { showNotification } from '../reducers/notificationReducer'

const AnecdoteForm = (props) => {

	const createAnecdote = async(event) => {
		event.preventDefault()

		const contentValue = event.target.content.value
		event.target.content.value = ''

		props.newAnecdote(contentValue)
		props.showNotification('Created anecdote: '+ contentValue)
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
