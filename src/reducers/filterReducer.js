const filterReducer = ( state = '', action ) => {
    switch (action.type) {
        case 'SET_FILTER': {
            const filter = action.filter
            return filter
        }
        default: return state
    }
}

export const setFilter = (filter) => {
    return {
        type: 'SET_FILTER',
        filter: filter
    }
}


export default filterReducer
