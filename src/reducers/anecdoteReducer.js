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
		  console.log('now initializing anecdotes',action.data)
		  return action.data
	  }

	  //TODO:fix id
      case 'CREATE_ANECDOTE': {
		  console.log('in reducer ', action)
          return state.concat(action.data.content)
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
	// anecdoteService.getAll().then( anecdotes => {
	// 	props.initializeAnecdotes(anecdotes)
	// })
}

export const upVote = (id) => {
    return {
        type: 'VOTE',
        data: {
            id: id
        }
    }
}

export const newAnecdote = (content) => {
    return {
        type: 'CREATE_ANECDOTE',
        data: {
            content
        }
    }
}

export const anecdotesToShow = (anecdotes, filter) => {
	console.log('anecdotes',anecdotes)
	return anecdotes
        .filter(anecdote => anecdote.content.includes(filter))
        .sort((a, b) => b.votes - a.votes)
}

export default anecdoteReducer
