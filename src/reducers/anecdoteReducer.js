import anecdoteService from '../services/anecdotes'

const anecdoteReducer = (state = [], action) => {
    switch (action.type) {
      case 'VOTE': {
          const newAmountOfVotes = state.find( anecdote => {
              return anecdote.id === action.data.id
          }).votes + 1

          const newState = state.map(
              anecdote => anecdote.id === action.data.id ? {...anecdote,votes:newAmountOfVotes } : anecdote
          )
          return newState
      }
	  case 'INIT_ANECDOTES': {
		  return action.data
	  }
      case 'CREATE_ANECDOTE': {
          return state.concat(action.data)
      }
      default: return state
    }
}

export const initializeAnecdotes = () => {
	return async dispatch => {
		const anecdotes = await anecdoteService.getAll()
		dispatch({
			type: 'INIT_ANECDOTES',
			data: anecdotes
		})
	}
}

export const newAnecdote = (content) => {
    return async dispatch => {
		const anecdote = await anecdoteService.createNew(content)
		dispatch({
			type: 'CREATE_ANECDOTE',
	        data: anecdote
		})
    }
}

export const upVote = (anecdote) => {
	return async dispatch => {
		const response = await anecdoteService.upVote(anecdote)
		dispatch({
			type: 'VOTE',
			data: {
				id: response.id
			}
		})
	}
}



export const anecdotesToShow = (anecdotes, filter) => {
	return anecdotes
        .filter(anecdote => anecdote.content.includes(filter))
        .sort((a, b) => b.votes - a.votes)
}

export default anecdoteReducer
