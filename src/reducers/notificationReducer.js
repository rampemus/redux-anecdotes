const initialState = {
    content: 'no notification'
}

const notificationReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'SHOW_NOTIFICATION': {

          const newState = { content: action.content }
          return newState
      }
      case 'CLEAR_NOTIFICATION': {
          if ( !action.content || action.content === state.content ) {
              return { content: '' }
          }
          return state
      }
      default: return state
    }
}

export const showNotification = (content, time) => {
    return async dispatch => {
        dispatch({
            type:'SHOW_NOTIFICATION',
            content: content
        })
        setTimeout(()=>{
            dispatch({
                type: 'CLEAR_NOTIFICATION',
                content: content
            })
        }, time*1000)
    }
}

export const clearNotification = () => {
    return {
        type: 'CLEAR_NOTIFICATION'
    }
}

export default notificationReducer
