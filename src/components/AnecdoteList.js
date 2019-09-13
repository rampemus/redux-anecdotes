import React from 'react'
import {connect} from 'react-redux'
import {upVote, anecdotesToShow} from '../reducers/anecdoteReducer'
import {showNotification} from '../reducers/notificationReducer'
const AnecdoteList = (props) => {

	const vote = (anecdote) => {
		props.upVote(anecdote)
		props.showNotification('You voted anecdote: ' + anecdote.content, 5)
	}

	return <div>
		{props.anecdotesToShow.map(anecdote =>
            <div key={anecdote.id}>
				<div>
					{anecdote.content}
				</div>
				<div>
					has {anecdote.votes}
					<button onClick={() => vote(anecdote)}>vote</button>
				</div>
			</div>)}
	</div>
}

const mapStateToProps = (state) => {
	return {
		anecdotesToShow: anecdotesToShow(state.anecdotes, state.filter),
		filter: state.filter
	}
}

const mapDispatchToProps = {
	upVote,
	showNotification
}

export default connect(mapStateToProps, mapDispatchToProps)(AnecdoteList)
