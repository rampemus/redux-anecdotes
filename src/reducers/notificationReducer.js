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
          const newState = { content: '' }
          return newState
      }
      default: return state
    }
}

export const showNotification = (content) => {
    return {
        type:'SHOW_NOTIFICATION',
        content: content
    }
}

export const clearNotification = () => {
    return {
        type: 'CLEAR_NOTIFICATION'
    }
}

export default notificationReducer
