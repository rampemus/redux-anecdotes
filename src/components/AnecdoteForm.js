import React from 'react'
import { connect } from 'react-redux'
import { newAnecdote } from '../reducers/anecdoteReducer'
import { showNotification } from '../reducers/notificationReducer'

const AnecdoteForm = (props) => {

	const createAnecdote = (event) => {
		event.preventDefault()
		const content = event.target.content.value
		props.newAnecdote(content)
		props.showNotification('Created anecdote: '+ event.target.content.value)
	}

	return (<div>
		<h2>create new</h2>
		<form onSubmit={createAnecdote}>
			<div><input name='content'/></div>
			<button>create</button>
		</form>
	</div>)
}

const mapDispatchToProps = {
	newAnecdote,
	showNotification
}

export default connect(null,mapDispatchToProps)(AnecdoteForm)
