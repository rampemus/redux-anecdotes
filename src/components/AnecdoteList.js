import React from 'react'
import { upVote } from '../reducers/anecdoteReducer'
import { showNotification } from '../reducers/notificationReducer'
const AnecdoteList = ({store}) => {

    const anecdotes = store.getState().anecdotes

    const filter = store.getState().filter

    const vote = (id, content) => {
        store.dispatch(upVote(id))
		store.dispatch(showNotification('You voted anecdote: '+ content))
    }

    return <div>
		{
			anecdotes.filter(anecdote => anecdote.content.includes(filter)).sort((a,b)=> b.votes - a.votes).map(anecdote => <div key={anecdote.id}>
				<div>
					{anecdote.content}
				</div>
				<div>
					has {anecdote.votes}
					<button onClick={() => vote(anecdote.id, anecdote.content)}>vote</button>
				</div>
			</div>)
		}
    </div>
}

export default AnecdoteList
